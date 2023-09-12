const planets = require("./planets.json");

module.exports = {
    allPlanets: async () => {
        return planets;
    },

    createPlanet: async () => {
        throw Error('error al crear planeta')
    }

}