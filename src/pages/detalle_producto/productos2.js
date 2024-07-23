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

// Importa las funciones necesarias de tu otro script (si es necesario)
// import { agregarProductoAlCarrito } from './productos.js';

// Función para manejar el evento de agregar al carrito
const agregarAlCarrito = () => {
    // Selecciona el botón de agregar al carrito
    const botonAgregar = document.getElementById('agregarCarrito');

    // Agrega un evento click al botón
    botonAgregar.addEventListener('click', () => {
        // Obtiene los valores de cantidad y talla seleccionada
        const cantidad = document.getElementById('cantidad').value;
        const talla = document.getElementById('talla').value;

        // Aquí deberías construir un objeto que represente el producto agregado
        const producto = {
            id: 1, // Genera un ID único para cada producto agregado
            nombre: 'Vaso de Barro Negro', // Puedes obtener el nombre desde el DOM si lo necesitas
            precio: 80, // Precio fijo o puedes obtenerlo del DOM
            imagen: '/public/img/vaso de barro negro.jpg', // URL de la imagen
            origen: 'Oaxaca, México', // Origen del producto
            cantidad: parseInt(cantidad), // Convierte la cantidad a un número entero
            talla: talla // Talla seleccionada
        };

        // Aquí deberías llamar a una función que añada este producto al carrito
        // Ejemplo: agregarProductoAlCarrito(producto);

        // Opción básica: Guardar el producto en localStorage (puede variar según tu implementación)
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Redirigir al usuario a la página de carrito después de agregar
        window.location.href = '/ruta-a-tu-pagina-de-carrito.html';
    });
};

// Ejecuta la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', agregarAlCarrito);

//=======================Otra opción====================================

// JavaScript personalizado para la página de producto

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los botones "Agregar al carrito"
    const botonesAgregar = document.querySelectorAll("#agregarCarrito");

    // Recorrer cada botón y agregar un event listener
    botonesAgregar.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Aquí puedes agregar la lógica para manejar la acción de agregar al carrito
            // Por ejemplo, obtener la cantidad seleccionada y la talla elegida
            const cantidad = document.querySelector("#cantidad").value;
            const talla = document.querySelector("#talla").value;

            // Aquí puedes realizar cualquier acción adicional, como enviar datos a un servidor, etc.
            console.log(`Añadido al carrito: Cantidad ${cantidad}, Talla ${talla}`);
        });
    });
});