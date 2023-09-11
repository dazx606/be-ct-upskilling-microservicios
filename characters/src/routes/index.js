const { Router } = require("express");
const controllers = require("../controllers/index")
const router = Router();

router.get("/", controllers.getCharacters);
router.post("/", controllers.postCharacter);







module.exports = router;
