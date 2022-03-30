const db = require("../db/index.js");

module.exports = class Thread {
  async getThreads() {
    const text = `SELECT * FROM threads`;
    const values = [];

    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows;
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  async insertThread(data) {
    const { title, user_id } = data;
    const timestamp = new Date();
    const text = `INSERT INTO threads(title, user_id, created_at) VALUES ($1, $2, $3) RETURNING *`;
    const values = [title, user_id, timestamp];

    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  async deleteThread(id) {
    console.log(id);
    const text = `DELETE FROM threads WHERE id=$1 RETURNING *`;
    const values = [id];

    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }
};