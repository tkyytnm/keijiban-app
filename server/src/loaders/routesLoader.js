const thread = require("../routes/thread.js");
const comment = require('../routes/comment.js');
const user = require('../routes/user.js');
const auth = require('../routes/auth.js');

module.exports = (app) => {
  // app.get("/", (req, res) => {
  //   res.send("Hello world!");
  // });

  app.use('/api/auth', auth);
  app.use('/api/user', user);
  app.use("/api/thread", thread);
  app.use('/api/comment', comment);
};
