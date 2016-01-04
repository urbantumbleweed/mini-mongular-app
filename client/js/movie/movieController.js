'use strict';

angular.module('movie-app.movies', [])
.controller('MovieController', function($state, Movies, MovieApi){
  var movie = this;

  movie.found = Movies.found;

  movie.find = function(){
    MovieApi.findMovie(movie.newTitle).
      then(function(res){
        // get json response
        Movies.found = res.data;
        $state.go('movie.found');
      });
  };

  movie.add = function(movie){
    MovieApi.addMovie(movie)
      .then(function(res){
        console.dir(res);
      });
  };
});
