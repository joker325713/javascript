"use strict";

//console.log(document.body);
//console.log(document.documentElement);
//console.log(document.body.childNodes); //все узлы внутри этого родителя
//console.log(document.body.firstChild); первый узел на странице
//console.log(document.body.firstElementChild); первый элемент на странице
//console.log(document.body.lastChild);
//console.log(document.body.lastElementChild);

//console.log(document.querySelector('#current').parentNode.parentNode); //родитель-родитель узел
//console.log(document.querySelector('#current').parentNode.parentElement); 

//console.log(document.querySelector('[data-current="3"]').previousSibling); или nextSibling для узла

//console.log(document.querySelector('[data-current="3"]').nextElementSibling); или previousElementSibling для элемента

for (let node of document.body.childNodes) {
    if(node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
