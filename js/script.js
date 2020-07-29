"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// console.log(personalMovieDB["count"]);

const answer_1_1 = prompt("Один из последних просмотренных фильмов?", ""),
      answer_1_2 = prompt("На сколько оцените его?", ""),
      answer_2_1 = prompt("Один из последних просмотренных фильмов?", ""),
      answer_2_2 = prompt("На сколько оцените его?", "");

personalMovieDB["movies"] = {
    [answer_1_1]: answer_1_2,
    [answer_2_1]: answer_2_2
};

// console.log(personalMovieDB["movies"]);