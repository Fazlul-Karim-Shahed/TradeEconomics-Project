
const te = require('tradingeconomics')


const getIndicatorData = async (req, res) => {

    try {

        te.login('fa336d9d1b2845d:zuko6pzmfukwj7o')


        data = te.getHistoricalData(country = ['mexico'], indicator='gdp').then((data) => {
            res.send({ Message: 'Successful', error: false, value: data })
        })
        .catch(err => {
            res.send({ Message: err.message, error: true, value: false, location: 'getIndicatorData' })
        })

    }
    catch (err) {
        res.send({ Message: err, error: true, value: false, location: 'getIndicatorData' })
    }

}


module.exports.getIndicatorData = getIndicatorData



