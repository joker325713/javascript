"use strict";

const soldier = {
    health: 100,
    armor: 100,
    sayHello: function() {
        console.log("Привет")
    }
};

const john = Object.create(soldier);

console.log(john.armor);
