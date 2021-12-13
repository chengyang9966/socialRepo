const pool = require('../pool');
const toCamelCase = require('./utils/to-camel-case');
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
  static async findByEmailOrUserName(email) {
    let sql = `SELECT * FROM users WHERE email=$1 OR username=$1 LIMIT 1;`;
    const { rows } = await pool.query(sql, [email]);

    return toCamelCase(rows)[0];
  }
  static async insert(username, bio, email, password, type) {
    let sql = `INSERT INTO users (username,bio,email,password,type) VALUES($1,$2,$3,$4,$5) RETURNING *`;
    const { rows } = await pool.query(sql, [
      username,
      bio,
      email,
      password,
      type
    ]);

    return { ...toCamelCase(rows)[0], msg: 'Created Account Successfully' };
  }
  static async update(id, username, bio, email, password, type) {
    let sql = `UPDATE users SET username=$2,bio=$3,email=$4,password=$5,type=$6 WHERE id=$1 RETURNING *`;
    const { rows } = await pool.query(sql, [
      id,
      username,
      bio,
      email,
      password,
      type
    ]);

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
