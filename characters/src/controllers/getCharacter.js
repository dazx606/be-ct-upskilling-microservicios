const characters = require("../data/index");
const { response } = require('../utils')

module.exports = async (req, res) => {
    const allCharacters = await characters.allCharacters()
    response(res, 200, allCharacters)
    // res.status(200).json({
    //     status: 200,
    //     data: characters.allCharacters()
    // })
}