"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function toggleVisibleMyDB() {
    if(personalMovieDB.privat === true) {
        personalMovieDB.privat = false;
        console.log('да');
    }
    else if(personalMovieDB.privat === false) {
        personalMovieDB.privat = true;
    }
}

toggleVisibleMyDB();
console.log(personalMovieDB);