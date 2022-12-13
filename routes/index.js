// A modular router setup isn't necessary for this project since we only have a single router, but could be used to expand easily in the future

const express = require("express");

// Import modular router for /notes
const notesRouter = require("./notes");

const app = express();

// Routes used in the notes router will be prefixed with /notes
app.use("/notes", notesRouter);

module.exports = app;
