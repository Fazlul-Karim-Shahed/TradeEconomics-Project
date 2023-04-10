const { model, Schema } = require('mongoose')

const HistorySchema = model('history', Schema({

    userId: {
        type: Schema.Types.ObjectId,
        required: true
    } ,
    country_1: { type: String, required: true },
    country_2: { type: String, required: true },
    indicator: { type: String, required: true },
    time: { type: Date, required: true }

}))


module.exports = HistorySchema