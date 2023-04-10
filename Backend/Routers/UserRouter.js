const { Signin } = require('./RouterFunctions/UserRouterFunctions/SigninFunctions')
const { Signup } = require('./RouterFunctions/UserRouterFunctions/SignupFunctions')


const router = require('express').Router()

router.post('/signin', Signin)
router.post('/signup', Signup)

module.exports = router