"use strict";

//to string 

//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(null + ''));
console.log(typeof(5 + ""));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';
console.log(fontSize);

//to number

//1)

console.log(typeof(Number('4')));

//2)
 console.log(typeof(+'4'));

//3)
console.log(typeof(parseInt('15px', 5)));

let answ = +prompt("Hello", "");

//to boolean

// 0, '', null, undefined, Nan; всегда ложь

//1)
let switcher = 0;

if (switcher) {
    console.log("working...");
}

switcher = 1;

if (switcher) {
    console.log("working...");
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'4444'));