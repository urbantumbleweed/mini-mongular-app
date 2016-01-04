'use strict';

var app = angular.module('movie-app', [
  'movie-app.movies',
  'movie-app.movieModel',
  'movie-app.api',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('movie', {
      url: '/',
      templateUrl: './partials/movies.tmpl.html'
    })
    .state('movie.find', {
      url: 'find',
      templateUrl: './partials/movie.find.tmpl.html',
      controller: 'MovieController',
      controllerAs: 'movie'
    })
    .state('movie.found', {
      url: 'found',
      templateUrl: './partials/movie.found.tmpl.html',
      controller: 'MovieController',
      controllerAs: 'movie'
    })
    .state('state1', {
      url: "/state1",
      templateUrl: "./partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "./partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});
