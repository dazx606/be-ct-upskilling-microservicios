const Planet = require('../data');
const { response } = require('../utils')

module.exports = async (req, res) => {
    
    const newPlanet = await Planet.createPlanet();
    response(res, 201, newPlanet)
}