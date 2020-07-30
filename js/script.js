"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// console.log(personalMovieDB.count);

/* const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

for (let i = 0; i < 2; i++){
    let a = prompt('Один из последних просмотренных фильмов?', '');
    if (a == '' || a == null  || a.length > 50){
        i--;
        continue;
    }

    let b = prompt('На сколько оцените его?', '');
    if (b == '' || b == null  || b.length > 50){
        i--;
        continue;
    }

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);