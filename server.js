const app = require("./app.js");
const { port } = require("./src/configs/config.js") || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
