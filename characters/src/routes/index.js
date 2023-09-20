const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();
const middlewares = require('../middlewares')


router.get("/characters", controllers.getCharacters);
router.post("/characters", middlewares.characterValidation, controllers.postCharacter);



module.exports = router;
