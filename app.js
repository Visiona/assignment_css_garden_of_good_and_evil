const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const personaMiddleware = require('./persona');
app.use(personaMiddleware);

// const Handlebars = require('handlebars');
const router = require('./routes/garden');
app.use('/', router);

app.use(express.static(`${__dirname}/public`));



app.listen(3000, ()=> {
  console.log('the server starts recording now.........');
})
