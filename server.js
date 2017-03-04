var express = require('express');
var app = express();
var path = require('path');
var quotes = require('./random')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/random-quote', function(req, res) {
  var quote = quotes[Math.floor(Math.random()*quotes.length)];
  res.send(quote);
});

app.get('/api/quotes', function(req, res) {
  res.send(quotes);
});

app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
