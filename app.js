const express = require("express");
const app = express();
const loaders = require("./src/loaders");
const path = require("path");

loaders(app);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = app;
