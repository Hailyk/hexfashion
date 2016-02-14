'use strict';

var express = require('express');
var app = express();
var path = require('path');
var port = 80;

app.get('/', function (req, res) {
  console.log("client requested /");
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/search/colorvalueffffff', function (req, res){
  console.log("client requested /search/colorvalueffffff");
  res.sendFile(path.join(__dirname+'/white.html'));
});

app.listen(port);

console.log("server running on "+port);