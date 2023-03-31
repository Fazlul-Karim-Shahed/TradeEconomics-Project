const { getCompareData } = require('./RouterFunctions/CompareRoutersFunctions/GetCompareData')


const router = require('express').Router()

router.get('/', getCompareData)

module.exports = router