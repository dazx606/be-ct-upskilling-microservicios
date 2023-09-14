const films = require("./films.json");

module.exports = {
    allFilms:()=> {
        return films;
    },

    createFilt:()=>{
       return 'film' 
    }
}