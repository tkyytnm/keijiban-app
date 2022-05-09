const express = require("express");
const app = express();
const loaders = require("./src/loaders");

loaders(app);

module.exports = app;
