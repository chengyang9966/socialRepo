const app = require("./src/app.js");
const pool = require("./src/pool");
require("dotenv").config();

pool
  .connect({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  })
  .then(() => {
    app().listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}...`)
    );
  })
  .catch((err) => console.error(err));
