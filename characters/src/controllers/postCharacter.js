const Character = require('../data');
const { response } = require('../utils')

module.exports = async (req, res) => {
    const newCharacter = await Character.createCharacter()
    response(res, 201, newCharacter)
}