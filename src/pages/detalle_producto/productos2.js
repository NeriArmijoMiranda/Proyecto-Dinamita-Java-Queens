/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './Productos.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------------------------------------------------------ */

// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el carrusel por su ID
    const myCarousel = document.getElementById('carouselExampleIndicators');

    // Crea un objeto de carrusel de Bootstrap
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Intervalo de 3 segundos entre slides
        wrap: true // Permite el ciclo infinito del carrusel
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón de "Agregar al carrito"
    const agregarCarritoBtn = document.getElementById('agregarCarrito');

    agregarCarritoBtn.addEventListener('click', function() {
        // Obtén la cantidad seleccionada
        const cantidad = document.getElementById('cantidad').value;
        
        // Obtén la talla seleccionada
        const talla = document.getElementById('talla').value;

        // Aquí puedes agregar lógica adicional, como enviar esta información a un carrito de compras
        console.log('Cantidad:', cantidad);
        console.log('Talla:', talla);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene todos los botones del acordeón
    const accordionButtons = document.querySelectorAll('.accordion-button-detalles');

    // Itera sobre cada botón
    accordionButtons.forEach(function(button) {
        // Agrega un evento de clic a cada botón
        button.addEventListener('click', function() {
            // Cierra todos los elementos colapsables que no sean el actual
            accordionButtons.forEach(function(btn) {
                if (btn !== button) {
                    btn.classList.add('collapsed');
                    btn.setAttribute('aria-expanded', 'false');
                    const target = btn.getAttribute('data-bs-target');
                    document.querySelector(target).classList.remove('show');
                }
            });
        });
    });
});







