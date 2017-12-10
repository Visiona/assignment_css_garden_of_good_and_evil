const express = require('express');
const router = express.Router();
const { allPersonas } = require('./models/personas');



router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router;
