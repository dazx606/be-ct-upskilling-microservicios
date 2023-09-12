const planets = require("../data");
const { response } = require('../utils')

module.exports = async (req, res) => {
    const allPlanets = await planets.allPlanets()
    response(res, 200, allPlanets)
}