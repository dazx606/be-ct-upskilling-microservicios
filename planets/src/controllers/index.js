const { catchAsync } = require('../utils')

module.exports = {
    getPlanets: catchAsync(require("./getPlanets")),
    postPlanets: catchAsync(require("./postPlanet"))
}