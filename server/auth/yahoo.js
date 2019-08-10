const router = require('express').Router()
const passport = require('passport')
const OAuth2Strategy = require('passport-oauth2')
const db = require('../../db')
module.exports = router

const callbackURL = (process.env.NODE_ENV === 'development') ? 'https://e43e5c9d.ngrok.io' : 'https://rm-node-postgres.herokuapp.com'
passport.use(new OAuth2Strategy({
  authorizationURL: 'https://api.login.yahoo.com/oauth2/request_auth',
  tokenURL: 'https://api.login.yahoo.com/oauth2/get_token',
  clientID: process.env.YAHOO_CLIENT_ID,
  clientSecret: process.env.YAHOO_CLIENT_SECRET,
  callbackURL: callbackURL + '/auth/yahoo/callback'
}, async (accessToken, refreshToken, profile, cb) => {
  try {
    const text = 'INSERT INTO tokens(access_token, refresh_token) VALUES($1, $2)'
    const values = [accessToken, refreshToken]
    const { rows } = await db.query(text, values)
    console.log('rows', rows)
  } catch (err) {
    console.log(err)
  }
}
))

router.get('/', passport.authenticate('oauth2'))

router.get('/callback',
  passport.authenticate('oauth2', { failureRedirect: '../../failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('../../sucess');
  })
