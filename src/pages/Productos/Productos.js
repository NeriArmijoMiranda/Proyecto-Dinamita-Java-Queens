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
            /* descripcion: product.descripcion, */
    
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



//////////// Aqupi quite algo, const saveLocal////////
///////// aquí agregué algo del final del codigo de productos//
/*Si te pierdes aquí va lo del carrito Mendoza del futuro*/
/*El localStorage funciona cn set item get item */
/*Primero es el set item, esto me la va a guardar*/
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

/*get item */

export { getProducts}
export {saveLocal}