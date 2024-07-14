/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './compras.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();


/* ------------------------------------------------------------- */

/*Este es otro modulo por decirlo de esa manera, donde se observan los productos añadidos al carrito */
const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito</h1>
    `;

modalContainer.append(modalHeader);

/*Esta es para literalmente hacer que la X de cerrar obtenga esa función, el botón está dentro de este modulo*/

const modalbutton = document.createElement("h1");
modalbutton.innerHTML = "x";
modalbutton.className = "modal-header-button align-item-center";

modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

modalHeader.append(modalbutton);

/*Aquí esta lo de sumar productos por si quiren quitarselo */
/*La relación que se tiene con el Json es que relacioné que cada uno del los productos estan relacionados con un h1 o un 
parrafo, etc.  */

carrito.forEach((product) => { 
/* PARTE NÚMERO 1. Con document.createElement se crea un elemento aquí es un div, pero puede ser un span, una imagen. un h1 etc.
El document.createElement es toda la interfaz del HTML por eso ponemos el "div" para decirle que me creé un "div" 
dentro de la interfaz, luego con la propiedad innerHTML me va ayudar a crear etiquetas HTML; por eso le pongo content
y llamo a inner para crear elementos dentro del div, por eso las etiquetas deben ser como en el HTML.
Aquí es donde se debe eliminar la descripción para que en el carrito ya no aparesca

*/

    let carritoContent = document.createElement("div"); /*Este div que creé lo tenemos que conectar a algún lado para que pueada
    funcionar, en este caso lo conectamos al HTML, que es donde vienen las propiedas*/
    carritoContent.className = "modal-content";//Clase para poder dar estilos al CSS
    carritoContent.innerHTML = `
        <img src= "${product.imagen}" height="300px" width="400px" align-center>
        <h3>${product.nombre}</h3>
        <h3>${product.origen}</h3>
        <p>Talla: ${product.talla}</p>
        <p>${product.descripcion}</p>
        <p>Precio: $${product.precio}</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product"> ✖️ Eliminar producto </span>
        `;
/*Aquí es para visualizar los productos del carrito en como número chiquito encima en el carrito */
    modalContainer.append(carritoContent);

/*Esto funciona para que los signos de + y - tengan funcionalidad */    
    let restar = carritoContent.querySelector(".restar")
    restar.addEventListener("click", () => {
        if (product.cantidad !== 1){
        product.cantidad--;
        }
        saveLocal();
        pintarCarrito();
    });
    
    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
        product.cantidad++;
        saveLocal();
        pintarCarrito();
    });
    

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
        eliminarProducto(product.id);
    });

});

/*Esto lo que hace funcionar es el total de los productos */
    
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
