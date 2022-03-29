const thread = require("./thread.js");
const comment = require('./comment.js');
const user = require('./user.js');
const auth = require('./auth.js');

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello world!");
  });

  app.use("/api/thread", thread);
  app.use('/api/comment', comment);
  app.use('/api/user', user);
  app.use('/api/auth', auth);
};
