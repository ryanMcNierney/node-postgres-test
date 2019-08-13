const router = require('express').Router()
module.exports = router

const YahooFantasy = require('yahoo-fantasy')
const yf = new YahooFantasy(
  process.env.YAHOO_CLIENT_ID,
  process.env.YAHOO_CLIENT_SECRET
)

const getData = () => {
  yf.setUserToken(
    process.env.ACCESS_TOKEN
  )

  const data = yf.league.standings(
    '390.l.194587',
    function (err, data) {
      if (err) console.log(err)
      return data
    }
  );

  return data
}

router.get('/', async (req, res) => {
  try {
    const data = await getData()
    res.status(200).json(data)
  } catch (err) {
    res.json(err)
  }
})

