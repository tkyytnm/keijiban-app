const ThreadModel = require("../models/thread.js");
const threadModelInstance = new ThreadModel();

module.exports = class ThreadService {
  async listThreads() {
    try {
      const res = await threadModelInstance.getThreads();
      return res;
    } catch (err) {
      throw err;
    }
  }

  async createThread(data) {
    try {
      const res = await threadModelInstance.insertThread(data);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async dropThread(id) {
    try {
      const res = await threadModelInstance.deleteThread(id);
      return res;
    } catch (err) {
      throw err;
    }
  }
};
