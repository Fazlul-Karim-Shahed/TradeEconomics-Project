
const _ = require('lodash')
const HistorySchema = require('../../../Schemas/HistorySchema')

const createHistory = (req, res) => {

    let data = new HistorySchema(_.pick(req.body, ["country_1", "country_2", "time", "userId", "indicator"]))
    data = data.save().then(data => {
        res.send({ message: 'History added', error: false, value: data })
    })
        .catch(err => res.send({ message: 'Something went wrong while creating history', error: true, value: err.message }))
}

module.exports = createHistory