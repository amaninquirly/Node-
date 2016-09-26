var express = require('express')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
app.use(express.static(__dirname + "/ppp"));
app.use(bodyParser.json());

app.listen(8080);
console.log("here server is running");