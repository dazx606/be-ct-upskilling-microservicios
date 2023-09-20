const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();
const middlewares = require('../middlewares')

router.get("/planets", controllers.getPlanets);
router.post("/planets", middlewares.planteValidation, controllers.postPlanets);


module.exports = router;
