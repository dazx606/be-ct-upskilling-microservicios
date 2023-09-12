const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();
const middlewares = require('../middlewares')

router.get("/", controllers.getPlanets);
router.post("/", middlewares.planteValidation, controllers.postPlanets);


module.exports = router;
