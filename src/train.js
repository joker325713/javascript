"use strict";

const arr = [1, 4, 7, 9, 12];
/* arr.push(33);
console.log(arr); */

/* arr.forEach(function(i, item, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

arr.sort(costNumber);   
console.log(arr);

function costNumber(a, b) {
    return a - b;
}