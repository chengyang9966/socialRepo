const express = require('express');
var cors = require('cors');

const rootRouter = require('./routes');

module.exports = () => {
  const app = express();
  app.use(cors({ origin: '*' }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(rootRouter);
  return app;
};
