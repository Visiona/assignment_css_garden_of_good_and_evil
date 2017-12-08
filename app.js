const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const router = require('./routes/garden')

const app = express();


app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.listen(3000, ()=> {
  console.log('the server starts recording now.........');
})
