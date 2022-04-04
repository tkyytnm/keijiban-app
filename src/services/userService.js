const UserModel = require("../models/user.js");
const UserModelInstance = new UserModel();
const ThreadModel = require("../models/thread.js");
const ThreadModelInstance = new ThreadModel();
const CommentModel = require("../models/comment.js");
const CommentModelInstance = new CommentModel();

module.exports = class UserService {
  async deleteUser(id) {
    try {
      await CommentModelInstance.deleteCommentsByUserId(id);
      const threads = await ThreadModelInstance.getThreadsByUserId(id);

      await threads.forEach((thread) => {
        CommentModelInstance.deleteCommentsByThreadId(thread.id);
      });

      await ThreadModelInstance.deleteThreadsByUserId(id);
      const res = await UserModelInstance.deleteUser(id);
      delete res.password;
      return res;
    } catch (err) {
      throw err;
    }
  }
};
