const Film = require('../data');
const { response } = require('../utils')

module.exports = async (req, res) => {
    //throw Error('error')
    const newFilm = await Film.createFilt()
    response(res, 201, newFilm)
}