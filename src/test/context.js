const { randomBytes } = require("crypto");
const { default: migrate } = require("node-pg-migrate");
const format = require("pg-format");
const pool = require("../pool");
require("dotenv").config();

const DEFAULT_OPTS = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_TEST_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

class Context {
  static async build() {
    //   Randomly Generate a role name to connect to PG
    const roleName = "a" + randomBytes(4).toString("hex");

    // Connect to PG as usual
    await pool.connect(DEFAULT_OPTS);

    //   Create a new role
    await pool.query(
      format(`CREATE ROLE %I WITH LOGIN PASSWORD %L;`, roleName, roleName)
    );
    // CREATE a schema
    await pool.query(
      format(`CREATE SCHEMA %I AUTHORIZATION %I;`, roleName, roleName)
    );

    //   Disconnect
    await pool.close();

    //    Create new tables in new schema
    await migrate({
      schema: roleName,
      direction: "up",
      log: () => {},
      noLock: true,
      dir: "migrations",
      databaseUrl: {
        ...DEFAULT_OPTS,
        ...{
          user: roleName,
          password: roleName,
        },
      },
    });

    //    Connect to PG as the newly created role
    await pool.connect({
      ...DEFAULT_OPTS,
      ...{
        user: roleName,
        password: roleName,
      },
    });

    return new Context(roleName);
  }
  constructor(roleName) {
    this.roleName = roleName;
  }

  async close() {
    // Disconnect from PG
    await pool.close();
    // Reconnect as our root user
    await pool.connect(DEFAULT_OPTS);
    // Delete The role and schema we created
    await pool.query(format("DROP SCHEMA %I CASCADE;", this.roleName));
    await pool.query(format("DROP ROLE %I", this.roleName));

    // Disconnect
    await pool.close();
  }

  async reset() {
    return pool.query(`Delete from users`);
  }
}

module.exports = Context;
