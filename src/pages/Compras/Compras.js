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
        <center><img class="imagenCompras rounded-3" src= "${product.imagen}"  ><center>
        <h2>${product.nombre}</h2>
        <h2>${product.origen}</h2>
        <p>Talla: ${product.talla}</p>
        <p>Precio: $${product.precio} mxn</p>
        <div >
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

        <p>Total: $ ${product.cantidad * product.precio} mxn</p>
        
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

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total} `;
    modalContainer.append(totalBuying);
};


/*Este es lo mismo cada que se escucha el timbre es la eliminación del producto,
también elimina el contador del producto*/ 

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    
    
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();

};
/*Aquí se guarda lo del localStorage y se ve reflejado en el contador del carrito */
const carritoCounter = () => {
    cantidadCarrito.style.display = "block"
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
    

};

carritoCounter();
