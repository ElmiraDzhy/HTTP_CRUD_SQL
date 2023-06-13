const InvalidUserError = require('./errors/InvalidUserError');
const UserNotFound = require('./errors/UserNotFound');

module.exports.errorHandler = async (err, req, res, next) => {
    if (err instanceof InvalidUserError) {
        return res.status(404).send('User data is not valid');
    }
    if (err instanceof UserNotFound) {
        return res.status(403).send('User not found');
    }
    res.status(500).send('Server error');
}