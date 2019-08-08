const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const PORT = 3000

// dotenv
require('dotenv').config()

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routing
app.use('/api', require('./api'))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`App listening on port ${PORT} in development!`)
  } else {
    console.log(`App listening on port ${PORT}!`)
  }
})
