const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")

router.post('/reg',[
    check('username', "кто не пишет, тот ......").notEmpty(),
    check('password', "пароль слишкий короткий, тебя могут взломать снюсоеды").isLength({min: 4, max: 25}),
], controller.regitration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router;