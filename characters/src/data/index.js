const characters = require("./characters.json");

module.exports = {
    allCharacters:()=> {
        return characters;
    },

    createCharacter:()=>{
        throw new Error()
    }
}