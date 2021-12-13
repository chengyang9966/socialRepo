const pool = require("../pool");
const toCamelCase = require("./utils/to-camel-case");
class UserRepo {
  static async find() {
    let sql = `SELECT * FROM users ORDER BY id;`;
    const { rows } = await pool.query(sql);

    return toCamelCase(rows);
  }
  static async findById(id) {
    let sql = `SELECT * FROM users WHERE id=$1 LIMIT 1;`;
    const { rows } = await pool.query(sql, [id]);

    return toCamelCase(rows)[0];
  }
  static async insert(username, bio) {
    let sql = `INSERT INTO users (username,bio) VALUES($1,$2) RETURNING *`;
    const { rows } = await pool.query(sql, [username, bio]);

    return toCamelCase(rows)[0];
  }
  static async update(id, username, bio) {
    let sql = `UPDATE users SET username=$2,bio=$3 WHERE id=$1 RETURNING *`;
    const { rows } = await pool.query(sql, [id, username, bio]);

    return toCamelCase(rows)[0];
  }
  static async delete(id) {
    let sql = `DELETE FROM users WHERE id=$1  RETURNING *;`;
    const { rows } = await pool.query(sql, [id]);

    return toCamelCase(rows)[0];
  }

  static async count() {
    let sql = `select count(*) from users;`;
    const { rows } = await pool.query(sql);

    return parseInt(rows[0].count);
  }
}
module.exports = UserRepo;
