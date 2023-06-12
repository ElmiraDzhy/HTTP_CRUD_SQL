const {Client} = require('pg');
const configs = require('./../configs/db.json');
const Boat = require('./Boat');
const dbConfigs = configs['development'];
const client = new Client(dbConfigs);

client.connect();
Boat._client = client;


process.on('beforeExit', () => {
    client.end();
})


module.exports = {
    Boat,
    client
}