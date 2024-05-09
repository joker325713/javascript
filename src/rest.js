"use strict";

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

///если нет второго аргумента:

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);