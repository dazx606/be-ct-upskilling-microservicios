const { catchAsync } = require('../utils');

module.exports = {
    getFilms: catchAsync(require("./getFilms")),
    postFilm: catchAsync(require("./postFillm")),
    getFilmById: catchAsync(require('./getFilmById'))
}