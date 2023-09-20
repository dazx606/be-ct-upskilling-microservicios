const films = require("../data/index");
const { response } = require('../utils')

module.exports = async (req, res) => {

const allFilms = await films.allFilms()
response(res, 200, allFilms)

    // res.status(200).json({
    //     status: 200,
    //     data: characters.allFilms()
    // })
}