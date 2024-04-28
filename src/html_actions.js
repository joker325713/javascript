'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'), 
      wrapper = document.querySelector('.wrapper');
      //oneHeart = wrapper.querySelector('.heart'),  можно так делать если элементы находятся внутри класса
      //wrapper = wrapper.querySelector('.wrapper');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 300px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'green';

/* for(let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'orange';
} */

hearts.forEach(item =>{
    item.style.backgroundColor = 'orange';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black'); //добавление элемента

document.body.append(div); //вставялется новый div в конце body

//document.querySelector('.wrapper').append(div);
//wrapper.append(div);

//wrapper.appendChild(div); старый способ не используется

//wrapper.prepend(div);
//wrapper.insertBefore(div, hearts[0]); старый способ не используется

//hearts[0].before(div); перед элементом

//hearts[0].after(div); после элемента

//circles[0].remove();
//wrapper.removeChild(hearts[0]); старый способ не используется

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]); старый способ не используется

div.innerHTML = "<h1>Hello world</h1>";//вставляет текст в объект HTML

//div.textContent = "Hello"; //только текст

div.insertAdjacentHTML("afterend", '<h2>Helloqo</h2>'); //есть еще afterbegin, beforeend, afterend