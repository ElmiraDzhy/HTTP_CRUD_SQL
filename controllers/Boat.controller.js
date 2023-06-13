const {Boat} = require('../models/index');
const {User} = require('../models/User');
const UserNotFound = require('../errors/UserNotFound');

module.exports.createBoat = async (req, res, next) => {
    try {
        const createdBoat = await Boat.create(req.body);
        res.status(201).send(createdBoat);
    } catch (err) {
        // res.status(400).send('Oops');
        const user = await User.findByPk(req.body.owner_id);
        if(user.length === 0){
            next(new UserNotFound('User Not Found'));
        }
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

module.exports.deleteBoat = async (req, res) => {
    // console.log(req.params)
    try {
        const pk = Number(req.params.id);
        console.log(pk)
        if (!isNaN(pk)) {
            const deletedBoat = await Boat.deleteByPk(pk);
            res.status(200).send(deletedBoat);
        }
    } catch (err) {
        res.status(404).send('Invalid id');
    }
}

// ? error :
module.exports.updateBoat = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const updateValues = req.body;

        const updatedBoat = await Boat.updateByPk({id, updateValues});

        res.status(200).send(updatedBoat);
    } catch (err) {
        res.status(404).send('Invalid id');

    }
}