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
        res.status(200).send(allBoats);
    } catch (err) {
        res.status(404).send('Oops');
    }
}

module.exports.getBoat = async (req, res) => {
    // console.log(req.params)
    try {
        const pk = Number(req.params.id);
        console.log(pk)
        if (!isNaN(pk)) {
            const boat = await Boat.findByPk(pk);
            res.status(200).send(boat);
        }
    } catch (err) {
        res.status(404).send('Invalid id');
    }
}