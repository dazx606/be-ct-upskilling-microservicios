const axios = require("axios");
const { response } = require('../utils')

module.exports = async (req, res) => {

    const { id } = req.params;
    const allFilms = await axios.get(`http://database:8004/Film/${id}`);
    response(res, 200, allFilms.data);
}