const app = require("./app.js");
const { port } = require("./src/configs/config.js");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
