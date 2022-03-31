const express = require("express");
const app = express();
const { port } = require("./src/configs/config.js");
const loaders = require("./src/loaders");

loaders(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
