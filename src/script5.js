"use strict";
///Первое задание

let numberOfFilms/*  = +prompt("Сколько фильмов вы уже посмотрели?", ""); */

function start() {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

      while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
      }
}

start();


///Второе задание 

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 
 
///Третье задание

//Первый способ

function rememberMyFilms() {
      for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
                  b = prompt("На сколько оцените его?", "");
      
            if (a != null && b != null && a !='' && b != '' && a.length < 50) {
                  personalMovieDB.movies[a] = b;
                  console.log('Done!');
            } else {
                  console.log('Error');
                  i--;
            }
      }          
}

/* rememberMyFilms(); */


//Второй способ
/* let i = 0;

while (i < 2) {
      i++;
      const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a !='' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
      } else {
            console.log('Error');
            i--;
      }
} */

// Третий способ
/*  let i = 0;

do {
      i++;
      const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a !='' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
      } else {
            console.log('Error');
            i--;
      }
} 
while (i < 2); */

function detectPersonalLevel() {
      if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
      }     else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
      }     else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
      }     else {
            console.log('Ошибка');
      }
}

/* detectPersonalLevel(); */

function showMyDB(hidden) {
      if(!hidden) {
            console.log(personalMovieDB);
      }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
      for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genre;
      }
};

writeYourGenres();

/* console.log(personalMovieDB); */