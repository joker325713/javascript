"use strict";

/* new RegExp('pattern', 'flags');
/pattern/f */

const ans = prompt('Введите ваше имя');

const reg = /n/ig;
//i
//g
//n

//console.log(ans.search(reg));
//console.log(ans.match(reg));

const pass = prompt('Password');

console.log(pass.replace(/./g, "*"));//Все элменты меняем на звездочку
console.log(pass.replace(/\./g, "*"));//Точки меняем на звездочку

console.log('12-34-56'.replace(/-/g, ':')); //Меняем - на :

const ans = prompt('Введите ваше имя');

const reg = /n/ig;
console.log(reg.test(ans)); //выводит true или false

//  \d числа
//  \w буквы
//  \s пробелы

const ans = prompt('Введите ваше число');

const reg = /\d/;
console.log(ans.match(reg));


const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

//  \D  не числа
//  \W  не буквы

