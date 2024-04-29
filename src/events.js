const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

/* btn.onclick = function() {
    alert('click');
}; */

btn[0].addEventListener('click', () => {
    alert('click');
});

btn[1].addEventListener('mouseenter', () => {
    alert('second-click');
});

/* let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    i++;
    if(i == 1) {
        btn[2].removeEventListener('click', deleteElement);
    }
}; */

const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);

};

btn[2].addEventListener('click', deleteElement, {once: true});
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e.target);
});

/* btn[2].addEventListener('mouseenter', (event) => {
    console.log(event.target);
    event.target.remove();
});
 */