"use strict";
///Первое задание

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

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
/* for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a !='' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
      } else {
            console.log('Error');
            i--;
      }
            
};
*/

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
let i = 0;

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
while (i < 2);


if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
}     else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
}     else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
}     else {
      console.log('Ошибка');
};
console.log(personalMovieDB);