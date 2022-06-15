const noche = document.getElementById('modo');
const html = document.getElementById('html');
const menu = document.getElementById('header');
const uno = document.getElementById('about');
const dos = document.getElementById('resume');
const tres = document.getElementById('services');
const cuatro = document.getElementById('portfolio');
const cinco = document.getElementById('contact');
const seis = document.getElementById('footer');

const main = document.getElementById('main');

const sub = document.getElementById('submenu');
const nav = document.getElementById('navbar');
const listam = document.getElementById('listamenu');

const activar = document.getElementById('activarmodo');
let cuenta = 0;

noche.addEventListener('click', tarde);

function tarde() {
    cuenta += 1;
    if (cuenta == 2) {
        location.href = "index.html";
    };
    dark.className = "dark";

    menu.className = "menu";

    uno.style = `background-color: #021a1f !important;`;

    dos.classList.remove('section-bg');
    dos.style = `background-color: rgb(47 44 40);`;

    tres.classList.remove('section-bg');
    tres.style = `background-color:#2A2828; `

    cuatro.classList.remove('section-bg');
    cuatro.style = `background-color:#142933; `

    cinco.classList.remove('section-bg');
    cinco.style = `background-color:#210707; `

    seis.classList.remove('section-bg');
    seis.style = `background-color:#312222; `


    main.style = "color: cornsilk";

    sub.style = `color: #00ffd3;`;
    listam.style = `background-color: #1f1010 !important;`;
    nav.style = `background: rgb(34 31 31 / 60%);`;

    activar.style = `left: 25px; color: white`;
}