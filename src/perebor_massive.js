"use strict";

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames);

//map 

const name = ['IVan', "anN", 'KSEnia'];

const result = name.map(item => item.toLowerCase());

console.log(result);

//every / some

const some = [4, 'dsfsdf', 'sdfsdfsdf'];

//console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

//reduce 

const arr = [4, 6, 4, 2, 6, 7, 2, 4];

const res = arr.reduce((sum, current) => sum + current);
console.log(res);

/* const arr = ['apple', 'pear', 'lemon'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res); */

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}

const newArray = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArray);