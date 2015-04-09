var express = require('express');
var app = express();
var http = require('http')

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('hello world');
});

var PORT = 3000;
console.log('listen: ', PORT);
app.listen(process.env.PORT || PORT);
//app.listen(PORT);