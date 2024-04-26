"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
      }     else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
      }     else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
      }     else {
            console.log('Ошибка');
      }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        }
        else if(personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genre;
      }
    }
}; 

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

console.log(personalMovieDB);
