"use strict";

'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

/* const phoneAnimation = images[0].animate([
    {transform: 'translateY(0)'},
    {transform: 'translateY(100px)'},
    {transform: 'translateY(-100px)'},
    {transform: 'translateY(0)'}
], {
    duration: 3000,
    iterations: Infinity
}); */

let phoneAnimation;

btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {transform: 'translateY(0) rotate(0deg)',
                filter: 'opacity(100%)'
            },
            {transform: 'translateY(0px) rotate(180deg)',
                filter: 'opacity(100%)'
            },
            {transform: 'translateY(0px) rotate(270deg)',
                filter: 'opacity(100%)'
            },
            {transform: 'translateY(0) rotate(360deg)',
                filter: 'opacity(100%)'
            }
        ], {
            duration: 4000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
})

let macbookAnimation;

btnMacbook.addEventListener('click', () => {
    if (!macbookAnimation) {
        macbookAnimation = images[1].animate([
            {transform: 'translateY(100%) rotate(0deg)'},
            {transform: 'translateY(65%) rotate(120deg)'},
            {transform: 'translateY(30%) rotate(240deg)'},
            {transform: 'translateY(43%) rotate(360deg)'},
            {transform: 'translateY(100%)'},
        ], {
            duration: 1000,
            iterations: Infinity
        });
    } else if (macbookAnimation.playState === 'paused') {
        macbookAnimation.play();
    } else {
        macbookAnimation.pause();
    }
})