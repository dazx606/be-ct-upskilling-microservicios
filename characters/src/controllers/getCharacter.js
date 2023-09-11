const characters = require("../data/index");

module.exports = (req, res) => {
    res.status(200).json({
        status: 200,
        data: characters.allCharacters()
    })
}