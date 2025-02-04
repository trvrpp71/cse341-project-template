//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/teamActivities/ta04', {
    title: 'Team Activity 04',
    path: '/teamActivities/ta04', // For pug, EJS
    activeTA04: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
