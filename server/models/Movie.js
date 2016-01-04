'use strict';
// Create basic mongoose schema/model with a few properties
var mongoose = require('mongoose');
var db = require('.db/config');

module.exports = mongoose.model('Movie', db.movieSchema);
