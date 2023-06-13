const express = require('express');
const bodyParser = express.json();
const app = express();
const {errorHandler} = require('./errorHandler');
const {validateUser} = require('./middleware/validateBody');
const UserController = require('./controllers/User.controller');
const boatRouter = require('./routes/boatRouter');

app.use(bodyParser); // will use bodyParser on each path if content-type: application/json
app.use('/boats', boatRouter);

app.post('/users', validateUser, UserController.createUser);
app.get('/users', UserController.getAllUsers);
app.get('/users/:id', UserController.getUser);
app.delete('/users/:id', UserController.deleteUser);
app.put('/users/:id', UserController.updateUser);
app.post('/users/:id', UserController.grabBoatForUser);

app.use(errorHandler);

module.exports = app;

/*
*
* POST / - create boat
* GET / - findAll
* GET : --- ? ---
* PUT ---- update boat
* DELETE ---- delete boat
*
* */