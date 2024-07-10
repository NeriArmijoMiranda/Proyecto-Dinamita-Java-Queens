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

/* ------------------------------------------------------------- */

/*Las const son para llamarlas del html y decirles "Eh wey te estan hablando" */

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

/*Aquí puse la igualdad del carrito para que me lo recupere en el localstorage, al carrito se convierte en
en lo que sea que este guardado en el localStorage. Aqui el carrito es básicamente, si hay algo guardado 
se convierte en eso, pero si no hay nada pues está vacío */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/*Aqui hice uan funcion para llamar a los productos del Json y que corran por que si no les pegan */

const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <center><img src= "${product.imagen}" height="300px" width="400px"></center>
        <h2>${product.nombre}</h2>
        <h3>${product.origen}</h3>
        <div class="descripcion" align-items-center>
        <p>Talla: ${product.talla}</p>
        <p>${product.descripcion}</p>
        <p>Precio: $${product.precio}</p>
        <p>Cantidad: ${product.cantidad}</p>
        </div>
    `;
        shopContent.append(content);
        
        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";
    
        content.append(comprar);

        
    /*Aquí es donde pasa la magia, use varios métodos entre ellos push, map y some, está función de aquí;
    lo que hace es que no se repitan los productos con todos sus atributos y solo se ponga la cantidad deseada,
    es decir en vez de tener dos sombreros con su descripcioón, lugar de origen etc, solo se duplique la cantidad.
    
    Lo que hace .addEventListener es que cada que le des click a algún producto lo va a agregar como si fuera un timbre
    llamando*/ 
    
        comprar.addEventListener("click", () => {
    /*Aquí es lo que hace que no se repite el producto con todo, sino que solo duplique la cantidad*/ 
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id); 
    
            if (repeat) {
                carrito.map((prod) => {
                    if(prod.id === product.id){
                        prod.cantidad++;
                    }
                });
            } else{
    
            carrito.push({
            id : product.id,
            nombre: product.nombre,
            precio: product.precio,
            imagen: product.imagen,
            origen: product.origen,
            talla: product.talla,
            cantidad: product.cantidad,
            descripcion: product.descripcion,
    
            });
        }
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
    /*Aquí mismo pedí a la función que de favor me guardara lo de mi carrito */
        saveLocal();
    });
    });
};

getProducts(); 




/*Si te pierdes aquí va lo del carrito Mendoza del futuro*/
/*El localStorage funciona cn set item get item */
/*Primero es el set item, esto me la va a guardar*/
const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};

/*get item */

/* -----------------------Carrito --------------------------------------------- */

const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito</h1>
    `;

modalContainer.append(modalHeader);

/*Esta es para literalmente hacer que la X de cerrar obtenga esa función */

const modalbutton = document.createElement("h1");
modalbutton.innerHTML = "x";
modalbutton.className = "modal-header-button align-item-center";

modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

modalHeader.append(modalbutton);

/*Aquí esta lo de sumar productos por si quiren quitarselo */

carrito.forEach((product) => { 
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
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