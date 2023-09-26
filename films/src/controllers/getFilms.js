const axios = require("axios");
const { response } = require('../utils')

module.exports = async (req, res) => {

    const allFilms = await axios.get("http://database:8004/Film")
    response(res, 200, allFilms.data)
}