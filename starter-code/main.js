'use strict'
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.header--nav');

menu.addEventListener('click', function(){
    nav.classList.remove('hidden');

    if(!nav.classList.contains('hidden')) {
        close.style.display = 'block';
        menu.style.display = 'none';
        nav.style.dispay = 'block';
    }
})

close.addEventListener('click', function() {
    nav.classList.add('hidden');
    close.style.display = 'none';
    menu.style.display = 'block';
})