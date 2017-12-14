const express = require('express');
const router = express.Router();
// const { allPersonas } = require('./models/personas');



router.get('/', (req, res) => {
  // const { persona } = req;
  let persona = req.cookies.persona || {};
  persona.character = persona.character || null;
  persona.food = persona.food || '';
  persona.colour = persona.colour || '';
  persona.insanity = parseInt(persona.insanity) || 0;
  console.log( persona )
  res.render('index', persona );
})

router.post('/persona',  (req, res) => {
  let persona = req.cookies.persona || {};
  let character = req.body.character;
  let food = req.body.food;
  let colour = req.body.colour.toLowerCase();
  let insanity = req.body.insanity;
  persona.character = character || persona.character;
  persona.food = food.trim() || persona.food;
  persona.colour = colour || persona.colour;
  persona.insanity = insanity || persona.insanity;
  console.log(persona);
  // req.flash('success', `Names set to: ${ req.body.name }`);
  res.cookie('persona', persona);
  res.redirect('back');
});

router.get('/clear', (req, res) => {
  res.cookie('persona', {});
  res.redirect('back');
});

module.exports = router;
