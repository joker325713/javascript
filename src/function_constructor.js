"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Привет ${this.name}, твой возраст ${this.id}`);
    }
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} вышел`);
}

const ivan = new User("ivan", 28);
const alex = new User("alex", 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);