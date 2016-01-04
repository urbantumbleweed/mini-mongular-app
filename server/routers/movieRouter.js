'use strict';
// Accept post and get requests
var movieController = require('../controllers/movieController');

module.exports = {
  post: movieController.create,
  get: movieController.retrieve
};

// Create movie on post with movieController.create
// Retrieve all movies on get with movieController.retrieve
