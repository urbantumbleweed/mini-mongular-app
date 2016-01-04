'use strict';

var Schema = require('mongoose').Schema;

var movieSchema = new Schema({
  Title: String,//'The Departed',
  Year: Number,//'2006',
  Rated: String,//'R',
  Released: Date,//'06 Oct 2006',
  Runtime: String,//'151 min',
  Genre: String,//'Crime, Drama, Thriller',
  Director: String,//'Martin Scorsese',
  Writer: String,//'William Monahan (screenplay), Alan Mak, Felix Chong',
  Actors: String,//'Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg',
  Plot: String,//'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
  Language: String,//'English, Cantonese',
  Country: String,//'USA, Hong Kong',
  Awards: String,//'Won 4 Oscars. Another 81 wins & 109 nominations.',
  Poster: String,//'http://ia.media-imdb.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg',
  Metascore: String,//'86',
  imdbRating: String,//'8.5',
  imdbVotes: String,//'801,077',
  imdbID: String,//'tt0407887',
  Type: String,//'movie',
  Response: String,//'True'
});

module.exports = {
  movieSchema: movieSchema
};
