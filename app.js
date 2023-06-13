const express = require('express');
const bodyParser = express.json();
const app = express();
const {validateBody} = require('./middleware/validateBody');
const {createBoat, getAllBoats, getBoat, deleteBoat, updateBoat} = require('./controllers/Boat.controller');
const {createUser, getAllUsers, getUser, deleteUser, updateUser, grabBoatForUser} = require('./controllers/User.controller');

app.post('/boats', bodyParser, validateBody, createBoat); //endpoint
app.get('/boats', getAllBoats);
app.get('/boats/:id', getBoat);
app.delete('/boats/:id', deleteBoat);
app.put('/boats/:id', bodyParser, updateBoat);

app.post('/users', bodyParser, createUser);
app.get('/users', getAllUsers);
app.get('/users/:id', getUser);
app.delete('/users/:id', deleteUser);
app.put('/users/:id', bodyParser, updateUser);

app.post('/users/:id', bodyParser, grabBoatForUser);

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