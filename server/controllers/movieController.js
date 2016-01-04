'use strict';
var Movie = require('../models/Movie.js');

// create controller methods that can do at least the C and R of CRUD operations

module.exports = {
  create: function(data){
    return Movie.create(data);
  },

  retrieve: function(query){
    return Movie.find(query);
  }
};
