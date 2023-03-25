
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const IndicatorRouter = require('./Routers/IndicatorRouters')

dotenv.config()
const app = express()
app.use(express.json())


const DATABASE = process.env.MONGODB_DATABASE.replace('<password>', process.env.MONGODB_PASS)

mongoose.connect(DATABASE).then(() => {
    console.log('Connected to Mongodb Server Successfully')
})

const port = 1229



app.use('/api/indicator', IndicatorRouter)


app.get('/', (req, res) => {
    res.send('Welcome to Trade Economics Project')
})


app.listen(port, () => {
    console.log(`Connected to port ${port}.`)
})
