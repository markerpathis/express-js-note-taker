const notes = require("express").Router();
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid");
const dbPath = "./db/db.json";

// GET Route for retrieving all the saved notes in the db
notes.get("/", (req, res) => {
  readFromFile(`${dbPath}`).then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting a new note to the db
notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, `${dbPath}`);

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.error("Error in posting note");
  }
});

// Delete Route to remove the note from the db
notes.delete("/:id", (req, res) => {
  const noteId = req.params.id;
  readFromFile(`${dbPath}`)
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id !== noteId);

      writeToFile(`${dbPath}`, result);

      res.json(`Note has been deleted`);
    });
});

module.exports = notes;
