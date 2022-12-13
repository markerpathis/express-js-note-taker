const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// GET Route for the notes page that will serve up the "/public/notes.html" page
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

// Wildcard GET route to direct users to the homepage (index.html)
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

app.listen(PORT, () => console.log(`Your app is listening at http://localhost:${PORT}`));
