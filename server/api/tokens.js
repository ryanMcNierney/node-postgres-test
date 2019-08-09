const router = require('express').Router()
const db = require('../../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM tokentest')
    res.send(rows)
  } catch (err) {
    res.send(err)
  }
})
