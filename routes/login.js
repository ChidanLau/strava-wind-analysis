const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', passport.authenticate('strava', { scope: ['public'] }), () => { });

router.get('/callback',
  passport.authenticate('strava', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

module.exports = router;
