const { Pool } = require("pg");
const { db } = require("../configs/config.js");
const connectionString = `postgresql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`;

const pool =
  process.env.NODE_ENV === "production"
    ? new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      })
    : new Pool({
        connectionString,
      });

module.exports = {
  async query(text, params) {
    return await pool.query(text, params);
  },
  async end() {
    pool.end();
  },
};
