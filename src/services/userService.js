const UserModel = require("../models/user.js");
const UserModelInstance = new UserModel();
const ThreadModel = require("../models/thread.js");
const ThreadModelInstance = new ThreadModel();
const CommentModel = require("../models/comment.js");
const CommentModelInstance = new CommentModel();
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = class UserService {
  async updateProfile(data) {
    const { email, email_old } = data;
    try {
      const user = await UserModelInstance.findUserByEmail(email);

      if (user && email_old !== email) {
        throw new Error("This email already exist.");
      }

      const res = await UserModelInstance.updateUserProfile(data);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async updatePassword(data) {
    const { password } = data;
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      const res = await UserModelInstance.updateUserPassword({ ...data, hash });
      return res;
    } catch (err) {
      throw err;
    }
  }

  async deleteUser(id) {
    try {
      await CommentModelInstance.deleteCommentsByUserId(id);
      const threads = await ThreadModelInstance.getThreadsByUserId(id);

      threads.forEach(async (thread) => {
        await CommentModelInstance.deleteCommentsByThreadId(thread.id);
      });

      await ThreadModelInstance.deleteThreadsByUserId(id);
      const res = await UserModelInstance.deleteUser(id);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async findUserById(id) {
    try {
      const res = await UserModelInstance.findUserById(id);
      return res;
    } catch (err) {
      throw err;
    }
  }
};
