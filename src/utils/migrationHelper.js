const fs = require('fs');
const { promisify } = require('util');
const pool = require('../pool');
require('dotenv').config({ path: '../../.env' });
const path = require('path');

const DEFAULT_OPTS = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
};

async function getOutstandingMigrations(migrations = []) {
  const files = await promisify(fs.readdir)(
    path.join(__dirname, '../../migrations')
  );
  const sql = await Promise.all(
    files
      .filter((file) => file.split('.')[1] === 'js')
      .filter((file) => !migrations.includes(file.split('.')[0]))
      .map(async (file) => ({
        file: file.split('.')[0],
        query: await (function test() {
          var pgmModule = require(`${path.join(
            __dirname,
            '../../migrations'
          )}/${file}`);
          let temp = '';

          let item = {
            sql: (text) => {
              let newTExt = text.toString();
              temp = temp + newTExt;
              return;
            }
          };
          if (typeof pgmModule.up === 'function') {
            pgmModule.up(item);
          }
          return temp;
        })()
      }))
  );
  return sql;
}

async function migrateUp() {
  // Check previous migrations

  let existingMigrations = [];
  try {
    await pool.connect(DEFAULT_OPTS);
    let result = await pool.query('SELECT * FROM pgmigrations');
    existingMigrations = result.rows.map((r) => r.name);
  } catch {
    console.warn('First migration');
  }
  // Get outstanding migrations
  const outstandingMigrations = await getOutstandingMigrations(
    existingMigrations
  );
  if (outstandingMigrations.length > 0) {
    try {
      await pool.query('BEGIN');
      for (let migration of outstandingMigrations) {
        // Run the migration
        await pool.query(migration.query.toString());
        // Keep track of the migration

        await pool.query(
          `INSERT INTO pgmigrations (name, run_on) VALUES ($1,NOW());`,
          [migration.file]
        );
        // All good, we can commit the transaction
        await pool.query('COMMIT');
        console.log(`Migrations complete! ${migration.file}`);
      }
    } catch (error) {
      // Oops, something went wrong, rollback!
      console.log(`Migrations FAIL! ${error}`);
      await pool.query('ROLLBACK');
    } finally {
      pool.close();
    }
  }
}

migrateUp();
