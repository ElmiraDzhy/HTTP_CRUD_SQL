const yup = require('yup');
const {format} = require('date-fns');
const CREATE_BOAT_SCHEMA = yup.object(
    {
        name: yup.string().required(),
        is_sea_able: yup.bool().required(),
        created_at: yup.date().max(new Date(), 'Date must be earlier than today').required(),
        water_displacement: yup.number(),
        max_speed: yup.number().required(),
    }
);

module.exports.validateBody = async (req, res, next) => {
    //req.body =  js object
    req.body.created_at = format(new Date(req.body.created_at), 'yyyy-MM-dd');
    try {
        const value = await CREATE_BOAT_SCHEMA.validate(req.body);
        console.log(req.body);
        next();
    } catch (err) {
        res.statusCode(400).send(err.message);
    }


}