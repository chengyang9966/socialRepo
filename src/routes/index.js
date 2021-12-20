const userRouter = require('./users');
const loginRouter = require('./login');
const activitiesRouter = require('./activities');
var express = require('express');
var rootRouter = express.Router();

rootRouter.use(userRouter);
rootRouter.use(loginRouter);
rootRouter.use(activitiesRouter);

module.exports = rootRouter;
