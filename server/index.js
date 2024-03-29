const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000

// dotenv
require('dotenv').config()

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routing
app.use('/api', require('./api'))
app.use('/auth', require('./auth'))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/failed', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/failed.html'))
})

app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/success.html'))
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`App listening on port ${PORT} in development!`)
  } else {
    console.log(`App listening on port ${PORT}!`)
  }
})
