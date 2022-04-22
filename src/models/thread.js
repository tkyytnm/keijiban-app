const db = require("../db/index.js");

module.exports = class Thread {
  async getThreads() {
    const text = `SELECT t.*, u.username, COUNT(c)
      FROM threads t
      LEFT JOIN users u
        ON t.user_id = u.id
      LEFT JOIN comments c
        ON t.id = c.thread_id
      GROUP BY t.id, u.username`;
    const values = [];

    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows;
      }
      return [];
    } catch (err) {
      throw err;
    }
  }

  async getThreadById(id) {
    const text = `SELECT * FROM threads WHERE id=$1`;
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

  async getThreadsByUserId(id) {
    const text = `SELECT * FROM threads WHERE user_id=$1`;
    const values = [id];

    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows;
      }
      return [];
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

  async deleteThreadsByUserId(user_id) {
    // use when deleting parent user
    const text = `DELETE FROM threads WHERE user_id=$1 RETURNING *`;
    const values = [user_id];

    try {
      const res = await db.query(text, values);
      if (res.rows?.length) {
        return res.rows;
      }
      return [];
    } catch (err) {
      throw err;
    }
  }
};
