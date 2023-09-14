const { catchAsync } = require('../utils');

module.exports = {
    getCharacters: catchAsync(require("./getCharacter")),
    postCharacter: catchAsync(require("./postCharacter"))
}