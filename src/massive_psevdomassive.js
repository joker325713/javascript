"use strict";

//const arr = [1, 2, 3, 5, 8];

//arr.pop(); delete last
//arr.push(10); add new 

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* for (let value of arr) {
    console.log(value);
} */

/* arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

/* const str = prompt("", "");
const products = str.split(", ");
console.log(products.join(";")); */

const arr = [1, 37, 26, 82, 9, 10];
arr.sort(costNumber);
console.log(arr);

function costNumber(a, b) {
    return a - b;
}