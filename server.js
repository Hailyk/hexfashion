'use strict';

var express = require('express');
var app = express();
var path = require('path');
var port = 80;

app.use(express.static(path.join(__dirname+'/static/')));

app.get('/', function (req, res) {
  console.log("client requested /");
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/search/colorvalue=ffffff', function (req, res){
  console.log("client requested /search/colorvalue=ffffff");
  res.sendFile(path.join(__dirname+'/white.html'));
});

app.get('/search/colorvalue=000000', function (req, res){
  console.log("client requested /search/colorvalue=000000");
  res.sendFile(path.join(__dirname+'/black.html'));
});

app.listen(port);

console.log("server running on "+port);