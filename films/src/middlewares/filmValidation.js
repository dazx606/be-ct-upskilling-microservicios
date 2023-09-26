const { ClientErrors } = require('../utils/errors')

module.exports = (req, res, next) => {
    const { title } = req.body;
    if (title) return next();
    else throw new ClientErrors('Error en el titulo', 409)
}