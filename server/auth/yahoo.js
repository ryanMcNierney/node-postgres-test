// // add passport oauth2 logic
// const router = require('express').Router()
// const passport = require('passport')
// const OAuth2Strategy = require('passport-oauth2')
// module.exports = router

// console.log('starting to authenticate...')
// const callbackURL = (process.env.NODE_ENV === 'development') ? 'https://a74525bd.ngrok.io' : 'https://rm-node-postgres.herokuapp.com'
// passport.use(new OAuth2Strategy({
//   authorizationURL: 'https://api.login.yahoo.com/oauth2/request_auth',
//   tokenURL: 'https://api.login.yahoo.com/oauth2/get_token',
//   clientID: process.env.YAHOO_CLIENT_ID,
//   clientSecret: process.env.YAHOO_CLIENT_SECRET,
//   callbackURL: callbackURL + '/auth/yahoo/callback'
// },
//   function (accessToken, refreshToken, profile, cb) {
//     console.log('AM I HERE - accessToken', accessToken)
//   }
// ))

// router.get('/', passport.authenticate('oauth2'))

// router.get('/callback',
//   passport.authenticate('oauth2', { failureRedirect: '/login' }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     console.log('AM I IN THE CALLBACK?')
//     res.redirect('../../');
//   })
