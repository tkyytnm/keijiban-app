const ThreadModel = require("../models/thread.js");
const ThreadModelInstance = new ThreadModel();
const CommentModel = require("../models/comment.js");
const CommentModelInstance = new CommentModel();

module.exports = class ThreadService {
  async listThreads() {
    try {
      const res = await ThreadModelInstance.getThreads();
      return res;
    } catch (err) {
      throw err;
    }
  }

  async getThread(id) {
    try {
      const res = await ThreadModelInstance.getThreadById(id);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async createThread(data) {
    try {
      const res = await ThreadModelInstance.insertThread(data);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async dropThread(id) {
    try {
      await CommentModelInstance.deleteCommentsByThreadId(id);
      const res = await ThreadModelInstance.deleteThread(id);
      return res;
    } catch (err) {
      throw err;
    }
  }
};
