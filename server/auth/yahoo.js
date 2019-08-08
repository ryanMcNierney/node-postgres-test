// add passport oauth2 logic
const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send('yahoo route')
  } catch (err) {
    res.send(err)
  }
})