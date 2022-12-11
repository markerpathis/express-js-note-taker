const notes = require("express").Router();
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");

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

module.exports = notes;
