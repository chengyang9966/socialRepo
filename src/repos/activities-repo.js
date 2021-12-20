const pool = require('../pool');
const returnDate = require('./utils/returnDate');
const toCamelCase = require('./utils/to-camel-case');

class ActivitiesRepo {
  static async findAllActivites(userid, date, limit = 10) {
    let sql = `SELECT date::date,title,description,time,location,code FROM activities WHERE userid=$1 AND date=$2 ORDER BY id LIMIT $3;`;
    const { rows } = await pool.query(sql, [userid, date, limit]);

    return toCamelCase(returnDate(rows, 'date'));
  }

  static async CreateActivities({
    userid,
    date,
    title,
    description = null,
    time = null,
    location = null,
    code = null
  }) {
    let sql = `INSERT INTO activities (
        date,title,description,time,location,code,userid
    ) VALUES(
        $1,$2,$3,$4,$5,$6,$7
    ) RETURNING *`;
    const { rows } = await pool.query(sql, [
      date,
      title,
      description,
      time,
      location,
      code,
      userid
    ]);

    return toCamelCase(rows);
  }
  static async UpdateActivities({
    userid,
    date,
    title,
    description = null,
    time = null,
    location = null,
    code = null
  }) {
    let sql = `
    UPDATE activities SET
        date=$1,
        title=$2,
        description=$3,
        time=$4,
        location=$5,
        code=$6,
        updated_at=CURRENT_TIMESTAMP
        WHERE userid=$7
        RETURNING *`;
    const { rows } = await pool.query(sql, [
      date,
      title,
      description,
      time,
      location,
      code,
      userid
    ]);

    return toCamelCase(rows);
  }
}
module.exports = ActivitiesRepo;
