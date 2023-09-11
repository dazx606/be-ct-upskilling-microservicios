const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();

router.get("/", controllers.getFilms);
router.post("/", controllers.postFilm);


module.exports = router;
