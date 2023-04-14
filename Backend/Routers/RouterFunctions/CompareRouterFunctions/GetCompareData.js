
const te = require('tradingeconomics')


const getCompareData = async (req, res) => {

    try {

        te.login(process.env.TE_LOGIN_KEY)

        const country_1 = req.query.country1
        const country_2 = req.query.country2
        const ind = req.query.indicator

        if (country_1 === country_2) {
            res.send({ Message: 'Both country should not be same', error: true })
        }
        else{
            data = te.getHistoricalData(country = [country_1, country_2], indicator = ind).then((data) => {

                const labels = []
                const data1 = []
                const data2 = []


                // Mapping
                if (data[data.length - 1].Category === '') data.pop()

                data.map((item, index) => {

                    if (index % 2 === 0) {
                        labels.push(new Date(item.DateTime).getUTCFullYear())
                        data1.push(item.Value)

                    }
                    else {
                        data2.push(item.Value)
                    }
                })

                if (data1.length != data2.length != labels.length) {
                    let max = Math.max(data1.length, data2.length, labels.length)
                    if (data1.length === max) { data1.pop() }
                    if (data2.length === max) { data2.pop() }
                    if (labels.length === max) { labels.pop() }
                    res.send({ Message: 'Successful', error: false, value: { labels: labels, data1: data1, data2: data2, data: data } })
                }
                else {
                    res.send({ Message: 'Successful', error: false, value: { labels: labels, data1: data1, data2: data2, data: data } })
                }




            })

                .catch(err => {
                    console.log('Hello', err)
                    res.send({ Message: err, error: true, location: 'getIndicatorData' })
                })
        }

        

    }

    catch (err) {
        res.send({ Message: err, error: true, value: false, location: 'getIndicatorData' })
    }

}


module.exports.getCompareData = getCompareData



