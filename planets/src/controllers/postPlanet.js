const axios = require("axios");
const { response } = require('../utils')

module.exports = async (req, res) => {
    
    const planet = req.body
    const newPlanet = await axios.post("http://database:8004/Planet", planet)
    response(res, 201, newPlanet.data.data)
}