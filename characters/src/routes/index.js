const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();
const middlewares = require('../middlewares')


router.get("/", controllers.getCharacters);
router.post("/", middlewares.characterValidation, controllers.postCharacter);



module.exports = router;
