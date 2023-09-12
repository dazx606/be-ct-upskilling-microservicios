const { ClientErrors } = require('../utils/errors');

module.exports = (req, res, next) => {
    const { name } = req.body;
    if (name) {

    }
    else {
        throw new ClientErrors("Hace falta el nombre", 401)
    }
}