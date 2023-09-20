const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();
const middlewares = require('../middlewares')

router.get("/films", controllers.getFilms);
router.post("/films", middlewares.filmValidation, controllers.postFilm);


module.exports = router;
