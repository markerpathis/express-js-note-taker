const notes = require("express").Router();
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid");

// GET Route for retrieving all the saved notes in the db
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting a new note to the db
notes.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.error("Error in adding note");
  }
});

// TODO: find out if the db can be the test entry in the db can be removed without breaking the page
// Delete Route to remove the note from the db
notes.delete("/:id", (req, res) => {
  const noteId = req.params.id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id !== noteId);

      writeToFile("./db/db.json", result);

      res.json(`Note ${noteId} has been deleted`);
    });
});

module.exports = notes;
