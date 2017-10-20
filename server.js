var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var replies = require('./routes/replies');
mongoose.Promise = global.Promise;


app.use('/', replies);

mongoose.connect('mongodb://localhost/book-chat-2')
  .then(() => console.log('connection to database succesful'))
  .catch((err) => console.error(err));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function () {
  console.log('book chat now listening on port 3000!');
});
