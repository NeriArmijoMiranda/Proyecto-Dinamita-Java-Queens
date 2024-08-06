/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './compras.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'
import { getProducts } from '../Productos/Productos.js' /* importo getproducts para el carrito */
import { carrito } from '../Productos/Productos.js' /* importamos definicion carrito */
import { saveLocal } from '../Productos/Productos.js'
import { carritoCounter } from '../Productos/Productos.js' //Contador de carrito
import { eliminarProducto } from '../Productos/Productos.js' // eliminar elemnto en carrito


document.querySelector("#navbar-app").innerHTML = navbarApp();
document.querySelector("#footer-app").innerHTML = footerApp();
document.innerHTML = saveLocal();

/* ------------------------------------------------------------- */

/*Las const son para llamarlas del html y decirles "Eh te estan hablando" */

const contenedorGeneral = document.getElementById("contenedorGeneral"); /* Contenedor general de toda la página */
const Container  = document.getElementById("modalContainer");/* descripción producto en html  */
const resumenCompras = document.getElementById("resumenCompras"); /* Resumen de compras html */
////////////////////////////////////////////////////////////////////////////////////////////////////////
const verCarrito = document.getElementById("verCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");


///////// aquí agregué algo del final del codigo de productos//
/*Si te pierdes aquí va lo del carrito Mendoza del futuro*/
/*El localStorage funciona cn set item get item */
/*Primero es el set item, esto me la va a guardar*/
/* const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}; */
/////////////////////////////

/* -----------------------CARRITO--------------------------------------------- */

/*Este es otro modulo por decirlo de esa manera, donde se observan los productos añadidos al carrito */


const pintarCarrito = () => {
    /* contenedorGeneral.innerHTML = "";  */

    /*Aquí esta lo de sumar productos por si quiren quitarselo
    La relación que se tiene con el Json es que relacioné que cada uno del los productos estan relacionados con un h1 o un 
    parrafo, etc.  */

    carrito.forEach((product) => {
        /* PARTE NÚMERO 1. Con document.createElement se crea un elemento aquí es un div, pero puede ser un span, una imagen. un h1 etc.
        El document.createElement es toda la interfaz del HTML por eso ponemos el "div" para decirle que me creé un "div" 
        dentro de la interfaz, luego con la propiedad innerHTML me va ayudar a crear etiquetas HTML; por eso le pongo content
        y llamo a inner para crear elementos dentro del div, por eso las etiquetas deben ser como en el HTML.
        Aquí es donde se debe eliminar la descripción para que en el carrito ya no aparesca.
        */
        let carritoContent = document.createElement("div"); /*Este div que creé lo tenemos que conectar a algún lado para que pueda
        funcionar, en este caso lo conectamos al HTML, que es donde vienen las propiedades*/
        carritoContent.className = "modal-content";//Clase para poder dar estilos al CSS
        carritoContent.innerHTML = `
        <img class="imagenCompras rounded-3" src= "${product.imagen}">
        <h1><strong>${product.nombre}</strong></h1>
        <h3>${product.origen}</h3>
        <h4>Talla: ${product.talla}</h4>
        <h4>Precio: $${product.precio} mxn</h4>
        <div class= "cantidad">
            Cantidad:
            <span class="restar">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill"
            viewBox="0 0 16 16">
            <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg> </span>
            ${product.cantidad}
            <span class="sumar">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up-fill"
            viewBox="0 0 16 16">
            <path
                d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg> </span>
        </div>
 
        <p><strong>Total: $ ${product.cantidad * product.precio} mxn</strong></p>
        
        <span class="delete">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
        </svg> Eliminar producto </span>
        <hr/>
        `;/*Aquí es para visualizar los productos del carrito en como número chiquito encima en el carrito */
        modalContainer.append(carritoContent);/* Se agrega contenido en html */

        /*Esto funciona para que los signos de + y - tengan funcionalidad */
        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--;
            }
            saveLocal();
            pintarCarrito();
            location.reload();
        });

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            pintarCarrito();
            location.reload();
        });

        //////////////// Revisar NO elimina /////////////
        let eliminar = carritoContent.querySelector(".delete");
        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
            location.reload();

        }); 

    });

    /////////////// Resumen de Compras ///////////
    /*Esto lo que hace funcionar es el total de los productos */
    /* acc = acumulador, el = cada producto */
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
// Guarda el total en localStorage
localStorage.setItem('totalCompra', total);


    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `
    <h2><strong>Resumen de compra:</strong></h2>
    <p>Total parcial: $ ${total} mxn</p>
    <p>Descuento: 10 % </p>
    <p>Costo de envío: Gratis.</p>
    <hr/>
    <p><strong>Total a pagar: $${total * 0.9} mxn</strong></p>
    <p>Aceptamos las siguientes tarjetas:</p>
    <p>
        <img class="tarjetas rounded-3 " src="/img/visa.png" alt="Tarjeta visa" height="60px" width="70px">
        <img class="tarjetas rounded-3 " src="/img/mastercard.png" alt="Tarjeta mastercard" height="40px" width="60px" >
        <img class="tarjetas rounded-3 " src="/img/americanexpress.png" alt="Tarjeta american express" height="50px" width="60px">
    </p>
     `;
    resumenCompras.append(totalBuying);

    let continuar = document.createElement("button");
    continuar.innerText = "Continuar con la compra";/*Con innertext lo ponemos texto al botón  */
    continuar.className = "continuarBoton"; /*Aquí lo conectamos con content y le estamos diciendo que a cada producto le agregue un botón de comprar */
    resumenCompras.append(continuar);
    // Agregar el evento click para redirigir
    continuar.addEventListener("click", function () {
        window.location.href = "/src/pages/datos_de_envio/datos_de_envio.html"; 
    });
}; 
pintarCarrito();

/* Llamamos las funciones que importamos de Productos */
carritoCounter(); /*Al llamar la función, se muestra el número del carrito.*/
eliminarProducto(); /* Elimina elemento del carrito al refrescar */





