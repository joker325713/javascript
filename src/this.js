"use strict";
//1)
/* function showThis() {
    console.log(this)
}
showThis();
//задачка
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5); */
//2)
/* const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};

obj.sum(); */

//3)
/* function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}
let ivan = new User("ivan", 28); */


//4)
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: "John"
}

sayName.call(user, 'Smith'); //1 метод присваивания 
sayName.apply(user, ['Smith']);//2 метод присваивания 

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));
//1) Обычная функция: this = window, но если стоит "use strict = undefined"
//2) Контекст у методов объект будет сам объект
//3) this в конструторах и классах - это новый экземпляр объекта
//4) Ручная привязка this: call, apply, bind

/// Примеры:

const btn = document.querySelector('button');

btn.addEventListener('click', function() {  ///this Работает толькко с обычном функцией, со стрелочной не работает
    this.style.backgroundColor = 'red';  
});

const obj = { 
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this);
        };
        say();
    }
}

obj.sayNumber();

const doublee = a => a * 2;

console.log(doublee(4));
