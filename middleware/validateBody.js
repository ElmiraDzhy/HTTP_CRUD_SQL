const yup = require('yup');
const {format} = require('date-fns');
const User = require('../models/User');
const UserNotFound = require("../errors/UserNotFound");
const CREATE_BOAT_SCHEMA = yup.object(
    {
        name: yup.string().required(),
        is_sea_able: yup.bool().required(),
        created_at: yup.date().max(new Date(), 'Date must be earlier than today').required(),
        water_displacement: yup.number(),
        max_speed: yup.number().required(),
    }
);

const CREATE_USER_SCHEMA = yup.object(
    {
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        email: yup.string().email().required(),
        boat_license: yup.number(),
    }
);

module.exports.validateBody = async (req, res, next) => {
    //req.body =  js object
    req.body.created_at = format(new Date(req.body.created_at), 'yyyy-MM-dd');
    try {
        const value = await CREATE_BOAT_SCHEMA.validate(req.body);
        next();
    } catch (err) {
        res.status(400).send(err.message);
    }

}

module.exports.validateUser = async (req, res, next) => {

    try {
        const value = await CREATE_USER_SCHEMA.validate(req.body);
        next();
    } catch (err) {
        next('You user is invalid'); // express see it as an error
    }
}

module.exports.isOwnerExists = async (req, res, next) => {
    try {
        const {owner_id} = req.body;
        if (!isNaN(owner_id)) {
            const [user] = await User.findByPk(owner_id);
            if (user) {
                return next();
            }
        }
        next(new UserNotFound('User Not Found'));
    } catch (err) {
        next(err)
    }
}