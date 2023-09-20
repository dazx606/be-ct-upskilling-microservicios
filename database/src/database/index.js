const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/envs');
const characterSchema = require('./schemas/characterSchema');
const filmSchema = require('./schemas/filmSchema');
const planetSchema = require('./schemas/planetSchema');

const conn = mongoose.createConnection(MONGO_URI);

//conn.model("Planet", planetSchema).find().populate('residents').then(res=> console.log(res[0].residents))


module.exports = {
    Character: conn.model("Character", characterSchema),
    Film: conn.model("Film", filmSchema),
    Planet: conn.model("Planet", planetSchema)
}
