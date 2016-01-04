var base_url = 'http://www.omdbapi.com/?';

angular.module('movie-app.api', [])
  .factory('MovieApi', function($http){

    var findMovie = function(movieName) {
      return $http.get(base_url + 't=' + movieName);
    };

    var getAllMovies = function(){
      return $http.get('api/movies');
    };

    var addMovie = function(movie){
      return $http.post('api/movies', movie);
    };

    return {
      findMovie: findMovie,
      getAllMovies: getAllMovies,
      addMovie: addMovie
    };
  })
