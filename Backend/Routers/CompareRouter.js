const { getCompareData } = require('./RouterFunctions/CompareRouterFunctions/GetCompareData')


const router = require('express').Router()

router.get('/', getCompareData)

module.exports = router