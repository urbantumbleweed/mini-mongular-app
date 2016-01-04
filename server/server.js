var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/movies-app');

// require db config for user Schema
// TODO: move db connection and logic to movieModel
// need to require mongoose in db file
var db = require('./db/config');
// movieModel gets the input from controller
// and creates the object that will write to the database
// move this function to movieModel
var Movie = mongoose.model('Movie', db.movieSchema);

var create = function(data){
  return Movie.create(data);
};

/* movieController has access to the request and response object
  it also has reference to the model.
  the controller will examine the contents of the req object
  it will have the data object that passed through the middleware
  the controller will call on the model to create the movie object
  the controller will get the response from from the database
  and response to the client with a db reference.
*/
var movieController = function(req, res){
  create(req.body)
    .then(function(movie){
      res.status(201).json(movie);
    })
};

var movieRouter = {
  post: movieController
}


var app = express();

// middlewares
// TODO: move middlewares to separate file
// directory: utils/middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '../../client'));


//routes
// TODO: move route handlers to the routers folder
// require the router for movies
// app.use('/api/movies', movieRouter);

app.post('/api/movies', movieRouter.post);

// Server static assets
// Connect to your local MongoDB
// Use body parser with url encoding and bodyparser.json
// User movie router to intercept /api/movies

app.listen(1337);
