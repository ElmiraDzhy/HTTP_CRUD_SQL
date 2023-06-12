const express = require('express');
const bodyParser = express.json();
const app = express();
const {validateBody} = require('./middleware/validateBody');
const {createBoat, getAllBoats, getBoat} = require('./controllers/Boat.controller');

app.post('/', bodyParser, validateBody, createBoat); //endpoint
app.get('/', getAllBoats);
app.get('/:id', getBoat);


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