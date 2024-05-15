"use strict";

const films = [ 
  {
    name: 'Titanic',
    raiting: 8
  },
  {
    name: 'Food',
    raiting: 10
  },
  {
    name: 'Dayz',
    raiting: 10
  },
  {
    name: 'Alone',
    raiting: 3
  }
];

/* function showGoodFilms(arr) {
  return arr.filter(films => films.raiting >= 8);
};

console.log(showGoodFilms(films)); */

/* function showListOfFilms(arr) {
  return arr.reduce((acc, curr) => `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

console.log(showListOfFilms(films)); */

function setFilmsIds(arr) {
  return arr.map((film, i) => {
      film.id = i;
      return film;
  });
}

console.log(setFilmsIds(films));

const transformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every(film => film.id || film.id === 0 ? true : false)
}

console.log(checkFilms(films));


////22222222222

const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

function getPositiveIncomeAmount(data) {
  return data.filter(item => item.amount > 0).reduce((sum, current) => sum + current.amount, 0);
};

console.log(getPositiveIncomeAmount(funds));