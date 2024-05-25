"use strict";

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(error) {
    console.log(error);
}

console.log('still normal');

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {}

console.log('normal');