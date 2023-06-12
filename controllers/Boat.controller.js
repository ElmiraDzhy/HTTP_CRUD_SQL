const {Boat} = require('../models/index');

module.exports.createBoat = async (req, res, next) => {
    try {
        const createdBoat = await Boat.create(req.body);
        res.status(201).send(createdBoat);
    } catch (err) {
        res.status(400).send('Oops');
    }
}

module.exports.getAllBoats = async (req, res, next) => {
    try {
        const allBoats = await Boat.findAll();
        res.status(201).send(allBoats);
    } catch (err) {
        res.status(400).send('Oops');
    }
}