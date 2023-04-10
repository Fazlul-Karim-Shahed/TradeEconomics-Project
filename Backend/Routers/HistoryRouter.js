const createHistory = require('./RouterFunctions/HistoryRouterFunctions/CreateHistory')
const getHistoryById = require('./RouterFunctions/HistoryRouterFunctions/GetHistoryById')



const router = require('express').Router()

router.get('/:userId', getHistoryById)
router.post('/create', createHistory)

module.exports = router