const express = require("express");
const app = express();
const path = require("path");
const loaders = require("./src/loaders");

loaders(app);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
