const axios = require("axios");
const { response } = require('../utils')

module.exports = async (req, res) => {
    //throw Error('error')
    const film = req.body
    const newFilm = await axios.post("http://database:8004/Film", film)
    response(res, 201, newFilm.data.data)
}