const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = (app) => {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.use(morgan("dev"));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.set("trust proxy", 1);
};
