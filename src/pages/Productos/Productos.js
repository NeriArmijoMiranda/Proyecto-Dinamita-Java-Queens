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

/*Las const son para llamarlas del html y decirles "Eh wey te estan hablando" */
const shopContent = document.getElementById("shopContent");/*Esta es la primera variable de la parte número 1 la obtuvimos
con el id que le pusimos en el HTML*/
<<<<<<< HEAD

=======
const categoryItems = document.querySelectorAll('.categoryitem');
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");/* */
const cantidadCarrito = document.getElementById("cantidadCarrito");
>>>>>>> Neri

/*Aquí puse la igualdad del carrito para que me lo recupere en el localstorage, al carrito se convierte en
en lo que sea que este guardado en el localStorage. Aqui el carrito es básicamente, si hay algo guardado 
se convierte en eso, pero si no hay nada pues está vacío */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
export {carrito} /* Se exporta para tenerlo en página compras */

/*Aqui hice unan funcion para llamar a los productos del Json y que corran por que si no les pegan */

const getProducts = async () => {
/*Ruta del archivo Json  */
    const response = await fetch("data.json");
    const data = await response.json();
    /*Aquí el data.forEach recorre todos los productos */
    data.forEach((product) => {
        let content = document.createElement("div");
        /*Se puden agregar clases a los elementos HTML, como lo vimos en imagen por ejemplo */
        content.className = "card";//Aquí por ejemplo esta la clase de card para el Css 
        content.innerHTML = `
        <center><img src= "${product.imagen}" height="300px" width="350px" margin-bottom="15px"></center>
        <h2>${product.nombre}</h2>
        <h3>${product.origen}</h3>
        <h4>${product.categoría}</h4>
        <div class="descripcion" align-items-center>
        <p>Talla: ${product.talla}</p>
        <p>${product.descripcion}</p>
        <p>Precio: $${product.precio}</p>
        <p>Cantidad: ${product.cantidad}</p>
        </div>
    `;
    /*Con la propiedad append vamos a conectar la primera parte PARTE 1 */
        shopContent.append(content);
        
    /*Aquí utilizamos el mismo proceso, pero en vez de que sea un div, será un botón  */    
        let comprar = document.createElement("button");
    
        comprar.innerText = "comprar";/*Con innertext lo ponemos texto al botón  */
        comprar.className = "comprar";/*Aquí el botón tiene su propia clase, es el botón de compras */
    /*Aquí lo conectamos con content y le estamos diciendo que a cada producto le agregue un botón de comprar */
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
    /*Aquí en el carrito es */
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

<<<<<<< HEAD
getProducts();



//////////// Aqupi quite algo, const saveLocal////////
///////// aquí agregué algo del final del codigo de productos//
=======
getProducts(); 

>>>>>>> Neri
/*Si te pierdes aquí va lo del carrito Mendoza del futuro*/
/*El localStorage funciona cn set item get item */
/*Primero es el set item, esto me la va a guardar*/
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

/*get item */

<<<<<<< HEAD
export { getProducts}
=======
/* 

/*FILTROS---------------------------------------------*/
const filterProductsByCategory = async (category) => {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        shopContent.innerHTML = "";
        const filteredProducts = data.filter(product => product.categoría === category);

  // Mostrar productos filtrados
    filteredProducts.forEach(product => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <center><img src="${product.imagen}" height="300px" width="350px" margin-bottom="15px"></center>
        <h2>${product.nombre}</h2>
        <h3>${product.origen}</h3>
        <h4>${product.categoría}</h4>
        <div class="descripcion" style="display: flex; flex-direction: column;">
            <p>Talla: ${product.talla}</p>
            <p>${product.descripcion}</p>
            <p>Precio: $${product.precio.toFixed(2)}</p>
            <p>Cantidad: ${product.cantidad}</p>
        </div>
    `;
        /*Aquí utilizamos el mismo proceso, pero en vez de que sea un div, será un botón  */    
        let comprar = document.createElement("button");
    
        comprar.innerText = "comprar";/*Con innertext lo ponemos texto al botón  */
        comprar.className = "comprar";/*Aquí el botón tiene su propia clase, es el botón de compras */
    /*Aquí lo conectamos con content y le estamos diciendo que a cada producto le agregue un botón de comprar */
        content.append(comprar);
    shopContent.appendChild(content);
});




// Si no se encontraron productos para la categoría
if (category === "Todo") {
getProducts();
}
else if (filteredProducts.length === 0) {
    shopContent.innerHTML = "<p>No se encontraron productos para esta categoría.</p>";
}
} catch (error) {
console.error("Error al filtrar productos por categoría:", error);
};
}

categoryItems.forEach(item => {
    item.addEventListener('click', async (event) => {
        event.preventDefault();
        const selectedCategory = item.getAttribute('category');
        await filterProductsByCategory(selectedCategory);
    });
});
// Mostrar todos los productos al cargar la página inicialmente
getProducts();

/*FIN---------------------FILTROS---------------*/

/*----------------------CARRITO--------------------------------------------- */


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



>>>>>>> Neri
