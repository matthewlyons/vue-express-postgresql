const { Pool } = require('pg');
const connectionString = process.env.db;
const pool = new Pool({
  connectionString: connectionString
});
module.exports = {
  query: (text, params) => pool.query(text, params)
};
