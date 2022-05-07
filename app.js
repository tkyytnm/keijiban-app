const express = require("express");
const app = express();
const path = require("path");
const loaders = require("./src/loaders");

loaders(app);

module.exports = app;
