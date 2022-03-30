const { Pool } = require("pg");
const { db } = require("../configs/config.js");
const connectionString = `postgresql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`;

const pool = new Pool({
  connectionString,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
