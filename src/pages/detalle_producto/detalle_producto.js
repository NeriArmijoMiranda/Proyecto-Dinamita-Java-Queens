/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './detalle_producto.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'
//import { saveLocal } from '../Productos/Productos.js'
//import { carritoCounter } from '../Productos/Productos.js'
//import { eliminarProducto } from '../Productos/Productos.js'
//import { carrito } from '../Productos/Productos.js'


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------------------------------------------------------ */

// Importa las funciones necesarias de tu otro script (si es necesario)
// import { agregarProductoAlCarrito } from './productos.js';

// Función para manejar el evento de agregar al carrito
/* const agregarAlCarrito = () => {
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
}); */

//////////////////////////////////////////////
/* //Se crea botón COMPRAR, agregar al carrito
        let comprar = document.createElement("button");
        const botonesAgregar = document.querySelectorAll("#agregarCarrito");

        comprar.innerText = "comprar";//Con innertext lo ponemos texto al botón
        comprar.className = "comprar";//Aquí el botón tiene su propia clase, es el botón de compras
        //Aquí lo conectamos con content y le estamos diciendo que a cada producto le agregue un botón de comprar
        content.append(comprar); */

        /*Aquí es donde pasa la magia, use varios métodos entre ellos push, map y some, está función de aquí;
        lo que hace es que no se repitan los productos con todos sus atributos y solo se ponga la cantidad deseada,
        es decir en vez de tener dos sombreros con su descripcioón, lugar de origen etc, solo se duplique la cantidad.
        Lo que hace .addEventListener es que cada que le des click a algún producto lo va a agregar como si fuera un timbre
        llamando*/

       /*  const comprar = document.querySelectorAll("#agregarCarrito");
        comprar.addEventListener("click", () => {
            //Aquí es lo que hace que no se repite el producto con todo, sino que solo duplique la cantidad
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        prod.cantidad++;
                    }
                });
            } else {
                //Aquí en el carrito es 
                carrito.push({
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    imagen: product.imagen,
                    origen: product.origen,
                    talla: product.talla,
                    cantidad: product.cantidad,
                    // descripcion: product.descripcion, //
                });
            }
            //console.log(carrito);
            //console.log(carrito.length);
            carritoCounter();
            //Aquí mismo pedí a la función que de favor me guardara lo de mi carrito
            saveLocal();
        }); 

        //carritoCounter(); /*Al llamar la función, se muestra el número del carrito.*/