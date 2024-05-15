const express = require('express')
const { errorHandler, authentication } = require('../middlewares')
const ControllerUser = require('../controllers/controllerUser')
const ControllerGame = require('../controllers/controllerGame')
const ControllerTransaction = require('../controllers/controllerTransaction')

const router = express.Router()

router.get("/", ControllerGame.game)
router.get("/game", authentication, ControllerGame.myGame)
router.post("/register", ControllerUser.register)
router.post("/login", ControllerUser.login)
router.post("/login/google", ControllerUser.googleLogin)
router.get("/:id", ControllerGame.gameId)
router.get("/payment/:id", authentication, ControllerTransaction.InitiateMidTrans)


router.use(errorHandler)

module.exports = router