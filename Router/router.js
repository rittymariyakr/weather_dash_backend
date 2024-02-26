
const express = require('express')

const router = new express.Router()

const userController = require("../Controller/userController")

router.post('/user/register',userController.register)

router.post('/user/login',userController.login)


module.exports = router