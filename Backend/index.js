
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

const CompareRouter = require('./Routers/CompareRouter')
const HistoryRouter = require('./Routers/HistoryRouter')
const UserRouter = require('./Routers/UserRouter')


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }));


const DATABASE = process.env.MONGODB_DATABASE.replace('<password>', process.env.MONGODB_PASS)

mongoose.connect(DATABASE).then(() => {
    console.log('Connected to Mongodb Server Successfully')
})

const port = 1229



app.use('/api/compare', CompareRouter)
app.use('/api/history', HistoryRouter)
app.use('/api/user', UserRouter)



app.get('/', (req, res) => {
    res.send('Welcome to Trade Economics Project')
})


app.listen(port, () => {
    console.log(`Connected to port ${port}.`)
})
