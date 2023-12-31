const {User} = require('../models/index');
const InvalidUserError = require('../errors/InvalidUserError');
module.exports.createUser = async (req, res, next) => {
    try {
        const createdUser = await User.create(req.body);
        res.status(201).send(createdUser);
    } catch (err) {
        // res.status(400).send('Oops');
        next(new InvalidUserError('User data is invalid'));
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).send(allUsers);
    } catch (err) {
        // res.status(404).send('Oops');
        next({message: 'User not found'});
    }
}

module.exports.getUser = async (req, res, next) => {
    try {
        const pk = Number(req.params.id);
        if (!isNaN(pk)) {
            const user = await User.findByPk(pk);
            res.status(200).send(user);
        }
    } catch (err) {
        next(new InvalidUserError('User data is invalid'));
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        const pk = Number(req.params.id);
        if (!isNaN(pk)) {
            const deletedUser = await User.deleteByPk(pk);
            res.status(200).send(deletedUser);
        }
    } catch (err) {
        res.status(404).send('Invalid id');
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const updateValues = req.body;
        const updatedUser = await User.updateByPk({id, updateValues});

        res.status(200).send(updatedUser);
    } catch (err) {
        res.status(404).send('Invalid id');

    }
}

module.exports.grabBoatForUser = async (req, res) => {
    try {
        const grabedBoat = await User.garbBoat({boatId: req.body.boat_id, userId: req.params.id});
        res.status(200).send(grabedBoat);
    } catch (err) {
        res.status(404).send('Invalid id');
    }
}