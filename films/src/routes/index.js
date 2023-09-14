const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();
const middlewares = require('../middlewares')

router.get("/", controllers.getFilms);
router.post("/", middlewares.filmValidation, controllers.postFilm);


module.exports = router;
