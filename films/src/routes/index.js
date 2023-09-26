const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();
const middlewares = require('../middlewares')

router.get("/films", controllers.getFilms);
router.post("/films", middlewares.filmValidation, controllers.postFilm);
router.get("/films/:id", controllers.getFilmById);


module.exports = router;
