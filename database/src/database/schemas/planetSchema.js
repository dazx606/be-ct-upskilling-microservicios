const { Schema } = require('mongoose');
const { ClientErrors } = require('../../utils/errors')

const planetSchema = new Schema({
    "_id": String,
    "name": String,
    "rotation_period": String,
    "orbital_period": String,
    "diameter": String,
    "climate": String,
    "gravity": String,
    "terrain": String,
    "surface_water": String,
    "residents": [{ type: String, ref: "Character" }],
    "films": [{ type: String, ref: "Film" }],
});

planetSchema.statics.list = async function () {
    return await this.find()
        .populate('residents', ['_id', 'name'])
        .populate('films', ['_id', 'title'])
};

planetSchema.statics.get = async function (id) {
    return await this.findById(id)
        .populate('residents', ['_id', 'name'])
        .populate('films', ['_id', 'title'])
}

planetSchema.statics.insert = async function (planet) {
    try {
        return await this.create(planet)
    } catch (error) {
        throw new ClientErrors('Error al crear el planeta', 400)
    }
}

module.exports = planetSchema;