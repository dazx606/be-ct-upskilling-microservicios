const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();

router.get("/", controllers.getPlanets);
router.post("/", controllers.postPlanets);


module.exports = router;
