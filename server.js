var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphand = require('express-handlebars');


var app = express();
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphand({
  defaultlayout: 'main'}));
  app.set('view engine', 'handlebars');

  var routes = require('./controller/routes.js');
  app.use('/', routes);

  var PORT = 3000;
  app.listen('listening to port 3000 '+PORT);
