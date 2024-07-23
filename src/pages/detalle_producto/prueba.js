/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './detalle_producto.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'



document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------------------------------------------------------ */
// Seleccionar elementos del DOM
const categoryItems = document.querySelectorAll('.categoryitem');
const shopContent = document.querySelector('.contenedor-productos-generales');

// Función para filtrar productos por categoría
const filterProductsByCategory = (category) => {
    // Obtener todas las tarjetas de productos
    const products = document.querySelectorAll('.card-productos-generales');

    products.forEach(product => {
        // Mostrar u ocultar tarjetas según la categoría seleccionada
        const productCategory = product.querySelector('h7').textContent;

        if (category === "Todo" || productCategory === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
};

// Agregar eventos de clic a cada elemento de categoría
categoryItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedCategory = item.getAttribute('category');
        filterProductsByCategory(selectedCategory);
    });
});












