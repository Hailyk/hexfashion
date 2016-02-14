'use strict';

var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/search/colorvalue: #*', function (req, res){

});

app.listen(port);

console.log("server running on "+port);