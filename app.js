const express = require('express');
const bodyParser = express.json();
const app = express();
const {errorHandler} = require('./errorHandler');
const userRouter = require('./routes/userRouter');
const boatRouter = require('./routes/boatRouter');

app.use(bodyParser); // will use bodyParser on each path if content-type: application/json
app.use('/boats', boatRouter);
app.use('/users', userRouter);
app.use(errorHandler);

module.exports = app;

