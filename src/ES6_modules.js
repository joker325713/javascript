"use strict";

export let one = 1;

let two = 2;

export {two};

export function sayHi() {
    console.log('Hi');
}

export default function sayHi() {
    console.log('Hi');
}
///////////

import {one, two} from 'Путь.js';
console.log(`${one} and ${two}`);

import {one as first} from "Путь.js"; //Переименовать переменную

import * as data from "Путь.js"; // Импортировать все
console.log(`${data.one} and ${data.two}`);
data.sayHi();

import sayHi from "Путь.js";
sayHi();

////как указывать  в index

//<script type ="module" src="main.js"></script>
//<script type ="module" src="script.js"></script>
