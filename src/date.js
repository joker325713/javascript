"use strict";

//const now = new Date();

/* console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay()); */

//console.log(now.getTimezoneOffset());
//console.log(now.getTime());

//console.log(now.setHours(19, 40));
//console.log(now);

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let somw = 1 ** 3;
}

let end = new Date();

alert(`цикл отработал за ${end - start} миллисекунд`);