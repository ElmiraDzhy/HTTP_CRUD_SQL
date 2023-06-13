const InvalidUserError = require('./errors/InvalidUserError');

module.exports.errorHandler = async (err, req, res, next) => {
    if (err instanceof InvalidUserError) {
        return res.status(404).send('User data is not valid');
    }
    res.status(500).send('Server error');
}