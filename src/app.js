const express = require('express');
var cors = require('cors');
const userRouter = require('./routes/users');
module.exports = () => {
  const app = express();
  app.use(cors({ origin: '*' }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(userRouter);
  return app;
};
