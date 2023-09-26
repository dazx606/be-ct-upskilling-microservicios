

module.exports = (req, res, next) => {
    const models = Object.keys(require('../database'))

    const { model } = req.params;
    if (models.includes(model)) next();
    else {
        res.status(404).json({ code: 404, message: 'Not Found' })
    }
}