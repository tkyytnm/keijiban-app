const { Pool } = require("pg");
const { db } = require("../configs/config.js");
const connectionString = `postgresql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`;

const pool = new Pool({
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
