var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// Server static assets
// Connect to your local MongoDB
// Use body parser with url encoding and bodyparser.json
// User movie router to intercept /api/movies

app.listen(1337);