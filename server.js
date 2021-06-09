const express = require('express')
const logger = require('morgan')
const mongooose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000
const controller = require('./controller')

// middlewares
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// test route
// app.get('/', (req, res) => {
//   res.sendFile('index.html')
// })

// db connection then start listen
mongooose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(app.listen(PORT, () => console.log(`App listening on port ${PORT}`)))
