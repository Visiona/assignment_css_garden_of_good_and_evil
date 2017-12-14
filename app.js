const express = require('express');
const app = express();
const helpers = require('./helpers');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({helpers: helpers, defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


const flash = require('express-flash-messages');
app.use(flash());

const { allPersonas } = require('./models/personas')

// const Handlebars = require('handlebars');
const router = require('./routes/router');
app.use('/', router);

app.use(express.static(`${__dirname}/public`));

const Handlebars = require('handlebars');
Handlebars.registerHelper('eq', function(val, val2) {
      return val1 == val2;
    });

app.listen(3000, ()=> {
  console.log('the server starts recording now.........');
})
