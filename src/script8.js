"use strict";
let num = 20;
function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello world!");
console.log(num);

/* function calc(a, b) {
    return (a + b);
}

console.log(calc(16, 4));
console.log(calc(5, 3));
console.log(calc(1, 1)); */

function ret() {
    let num = 20;

    ///

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => a + b;
console.log(calc(21, 2));