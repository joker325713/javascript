"use strict";

const str = "teSt";
const arr = [1, 2, 5];

/* console.log(str.length); */

console.log(str.toUpperCase());//сделать заглавными
console.log(str.toLowerCase());//сделать строчными
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));//На каком индексе начинается слово

const logg = "Hello world!";

/* console.log(logg.slice(0, 6));//вырезать слово от до

console.log(logg.slice(6, 11)); *///вырезать слово от до, нельзя использовать отрицательное

/* console.log(logg.substr(1, 6)); *///не поддерживается

const num = 12.5;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));