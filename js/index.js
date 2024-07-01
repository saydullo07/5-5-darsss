const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const h1 =document.querySelector('.h1');
const h2 =document.querySelector('.h2');
const check = document.querySelector('.check');
const p = document.querySelector('.p');
const p2 = document.querySelector('.p2');
const button = document.querySelector('.button1');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
const content = document.querySelector('.content')
const uzb = document.querySelector('.uzb');
const rus = document.querySelector('.rus');
const eng = document.querySelector('.eng');
const body = document.querySelector('.body')
check.addEventListener('click',function() {
    h1.style.color = 'white';
    p.style.color = 'white';
    button.style.color = 'white';
    content.style.backgroundColor = 'black';
    black.style.backgroundColor= '#F4F4F5';
    body.style.backgroundColor = 'black';
    h2.style.color = 'white';
    p2.style.color = 'white'
})