const { getIndicatorData } = require('./RouterFunctions/IndicatorRoutersFunctions/GetIndicators')


const router = require('express').Router()

router.get('/', getIndicatorData)

module.exports = router