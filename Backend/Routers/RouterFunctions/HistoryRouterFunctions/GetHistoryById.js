
const _ = require('lodash')
const HistorySchema = require('../../../Schemas/HistorySchema')

const getHistoryById = async (req, res) => {

    let data = await HistorySchema.find({ userId: req.params.userId })
    if (data.length === 0) {
        res.send({ message: 'No history found', error: false })
    }
    else {
        res.send({ message: 'User\'s All history', error: false, value: data })
    }
}

module.exports = getHistoryById