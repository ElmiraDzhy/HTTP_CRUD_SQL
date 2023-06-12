const express = require('express');
const bodyParser = express.json();
const app = express();
const {validateBody} = require('./middleware/validateBody');
const {createBoat, getAllBoats} = require('./controllers/Boat.controller');
app.post('/', bodyParser, validateBody, createBoat); //endpoint
app.get('/', getAllBoats);

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