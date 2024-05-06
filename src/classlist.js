const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList);
//console.log(btns[0].classList.item(0));
console.log(btns[0].classList.add('red', 'dsfsdfsdfdsf'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue')); // тоглить, то есть добавлят или убирает если уже имеется

if (btns[0].classList.contains('red')) {
    console.log('red');
}

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
})

btns[1].addEventListener('click', () =>{
    btns[2].classList.toggle('red');
})

wrapper.addEventListener('click', (event)=>{
    if (event.target && event.target.tagName == 'BUTTON') {
//  if (event.target && event.target.classList.contains('blue')) выводит консоль только если имеет класс blue
        console.log('hello');
    }
})

wrapper.addEventListener('click', (event)=>{
    if (event.target && event.target.matches('button.red')) {
        console.log('hello');
    }
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
