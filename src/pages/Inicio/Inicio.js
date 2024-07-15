/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './inicio.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------- */

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;
let visibleSlides = 3;
let currentIndex = 0;

function moveSlide(direction) {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    visibleSlides = mediaQuery.matches ? 1 : 3;
    currentIndex += direction * visibleSlides;

    if (currentIndex < 0) {
        currentIndex = slides.length - visibleSlides;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const amountToMove = slideWidth * currentIndex;
    track.style.transform = 'translateX(-' + amountToMove + 'px)';
}

// Update slideWidth and currentIndex on window resize
window.addEventListener('resize', () => {
    const currentSlide = document.querySelector('.carousel__slide');
    slideWidth = currentSlide.getBoundingClientRect().width;
    moveSlide(0);
});