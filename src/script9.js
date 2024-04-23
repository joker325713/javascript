"use strict";
/* const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(amount * curr);
}

convert(500, usdCurr);
convert(500, eurCurr);
 */

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
//такая же только сокарщенная promotion(convert(500, usdCurr));

promotion(res);