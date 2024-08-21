/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './Productos.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'



document.querySelector("#navbar-app").innerHTML = navbarApp();
document.querySelector("#footer-app").innerHTML = footerApp();

/* ------------------------------------------------------------------------------------------------------------ */
/*Las const son para llamarlas del html y decirles "Eh wey te estan hablando" */
const shopContent = document.getElementById("shopContent");/*Esta es la primera variable de la parte número 1 la obtuvimos
con el id que le pusimos en el HTML*/
const categoryItems = document.querySelectorAll('.categoryitem');
/* ARLETTE: Ya están en compras. Verificar.
const verCarrito = document.getElementById("verCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito"); */
const datacategoryItems = document.querySelectorAll('.navbar-nav .nav-link');
/*Aquí puse la igualdad del carrito para que me lo recupere en el localstorage, al carrito se convierte en
en lo que sea que este guardado en el localStorage. Aqui el carrito es básicamente, si hay algo guardado 
se convierte en eso, pero si no hay nada pues está vacío */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


/*Aqui hice unan funcion para llamar a los productos del Json y que corran por que si no les pegan */
const getProducts = async () => {
    /*Ruta del archivo Json  */
    const response = await fetch('/data.json');
    const data = await response.json();
    /*Aquí el data.forEach recorre todos los productos */
    data.forEach((product) => {
        let content = document.createElement("div");
        /*Se puden agregar clases a los elementos HTML, como lo vimos en imagen por ejemplo */
        content.className = "card";//Aquí por ejemplo esta la clase de card para el Css 
        content.innerHTML = `
        <center><img class="imagenProduct rounded-3" src= "${product.imagen}" margin-bottom="15px"></center>
        <h2>${product.nombre}</h2>
        <h3>${product.origen}</h3>
        <h4>${product.categoría}</h4>
        <div class="descripcion" align-items-center>
        <p>Precio: $${product.precio}</p>
        </div>
        `;
        //<p>${product.descripcion}</p> Agregar después
        /*Con la propiedad append vamos a conectar la primera parte PARTE 1 */
        shopContent.append(content);

        /* //Se crea botón COMPRAR, agregar al carrito
        let comprar = document.createElement("button");

        comprar.innerText = "comprar";//Con innertext lo ponemos texto al botón
        comprar.className = "comprar";//Aquí el botón tiene su propia clase, es el botón de compras
        //Aquí lo conectamos con content y le estamos diciendo que a cada producto le agregue un botón de comprar
        content.append(comprar); */

        /*Aquí es donde pasa la magia, use varios métodos entre ellos push, map y some, está función de aquí;
        lo que hace es que no se repitan los productos con todos sus atributos y solo se ponga la cantidad deseada,
        es decir en vez de tener dos sombreros con su descripcioón, lugar de origen etc, solo se duplique la cantidad.
        Lo que hace .addEventListener es que cada que le des click a algún producto lo va a agregar como si fuera un timbre
        llamando*/

        /* comprar.addEventListener("click", () => {
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
            console.log(carrito);
            console.log(carrito.length);
            carritoCounter();
            //Aquí mismo pedí a la función que de favor me guardara lo de mi carrito
            saveLocal();
        }); */

       //-------------------------------Boton detalles producto -----------------------------------------------------------
       let detalleBoton = document.createElement("button");

       detalleBoton.innerText = "Ver más";/*Con innertext lo ponemos texto al botón  */
       detalleBoton.className = "detalleBoton";//Clase del boton ver mas
       content.append(detalleBoton);
       
       // Añadir evento click al botón
       detalleBoton.addEventListener("click", () => {
           window.location.href = `/src/pages/detalle_producto/${product.id}.html`; // Redirigir a la página del producto
       });
       // ---------------------- Termina Boton detalle producto
    });
};

getProducts();
export { carrito } /* Se exporta para tenerlo en página compras */

//////////// Aqupi quite algo, const saveLocal////////
///////// aquí agregué algo del final del codigo de productos//
/*Si te pierdes aquí va lo del carrito Mendoza del futuro*/
/*El localStorage funciona cn set item get item */
/*Primero es el set item, esto me la va a guardar*/
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    carritoCounter();
};

/*get item */

/*---------------------FILTROS--------------------------------------*/
// Selecciona todos los botones con la clase 'categoryitem'
const categoryItems1 = document.querySelectorAll('.categoryitem');

// Función para cambiar el color de fondo del botón
const changeButtonColor = (clickedButton) => {
    categoryItems1.forEach(item => {
        item.style.backgroundColor = '#109995'; //color principal
    });
    clickedButton.style.backgroundColor = '#F85931'; //cambia el color del botón clicado
};

// Escuchar eventos de click en los botones de filtro
categoryItems1.forEach(item => {
    item.addEventListener('click', async (event) => {
        event.preventDefault();
        // Cambiar color del botón clicado
        changeButtonColor(event.currentTarget);
        // Obtener la categoría seleccionada
        const selectedCategory = item.getAttribute('category');
        // Filtrar productos por categoría
        await filterProductsByCategory(selectedCategory);
    });
});


//====================================================
// Función para filtrar productos por categoría
const filterProductsByCategory = async (category) => {
    try {
        if (category === "Todo") {
            shopContent.innerHTML = ""; // Limpiar el contenido anterior
            getProducts(); // Mostrar todos los productos
        } else {
            const response = await fetch('/data.json');
            const data = await response.json();
            shopContent.innerHTML = ""; // Limpiamos el contenido anterior

            const filteredProducts = data.filter(product => product.categoría === category);

            // Mostrar productos filtrados
            filteredProducts.forEach(product => {
                let content = document.createElement("div");
                content.className = "card";
                content.innerHTML = `
                    <center><img class="imagenProduct rounded-3" src="${product.imagen}" margin-bottom="15px"></center>
                    <h2>${product.nombre}</h2>
                    <h3>${product.origen}</h3>
                    <h4>${product.categoría}</h4>
                    <div class="descripcion" style="display: flex; flex-direction: column;">
                        <p>Precio: $${product.precio.toFixed(2)}</p>
                    </div>
                `;

                // Agregar botón de detalle
                let detalleBoton = document.createElement("button");
                detalleBoton.innerText = "Ver más";
                detalleBoton.className = "detalleBoton"; // Clase del botón ver más
                content.appendChild(detalleBoton);

                // Añadir evento click al botón de detalle
                detalleBoton.addEventListener("click", () => {
                    window.location.href = `/src/pages/detalle_producto/${product.id}.html`; // Redirigir a la página del producto
                });

                shopContent.appendChild(content);
            });

            // Si no se encontraron productos para la categoría
           if (filteredProducts.length === 0) {
               getProducts(); /*shopContent.innerHTML = "<p>No se encontraron productos para esta categoría.</p>";*/
            }
        }
    } catch (error) {
        console.error("Error al filtrar productos por categoría:", error);
    };
};

// Escuchar eventos de click en los botones de filtro
categoryItems.forEach(item => {
    item.addEventListener('click', async (event) => {
        event.preventDefault();
        const selectedCategory = item.getAttribute('category');
        await filterProductsByCategory(selectedCategory);
    });
});

getProducts ();

/*FIN---------------------FILTROS---------------*/
/*-----------------------------------------------*/
// Función para obtener parámetros de consulta de la URL
const getQueryParameter = (paramName) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
};

// Función para cargar productos desde un archivo JSON y filtrar por categoría
const loadProducts = async (category) => {
    try {
        const response = await fetch('/data.json'); // Ruta al archivo JSON con datos de productos
        const products = await response.json();
        console.log(`Products data:`, products);

        // Filtrar productos por categoría si es necesario
        const filteredProducts = category === "Todo" 
            ? products 
            : products.filter(product => product.categoría === category);

        displayProducts(filteredProducts);
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
};

// Función para mostrar productos en la página
const displayProducts = (productsList) => {
    const productContainer = document.getElementById('shopContent'); 
    if (!productContainer) {
        console.error("No se encontró el contenedor 'shopContent'");
        return;
    }

    productContainer.innerHTML = ""; // Limpiar contenido anterior

    productsList.forEach(product => {
        let productCard = document.createElement("div");
        productCard.className = "card";
        productCard.innerHTML = `
            <center><img class="imagenProduct rounded-3" src="${product.imagen}" margin-bottom="15px"></center>
            <h2>${product.nombre}</h2>
            <h3>${product.origen}</h3>
            <h4>${product.categoría}</h4>
            <div class="descripcion" style="display: flex; flex-direction: column;">
                <!--<p>Talla: ${product.talla}</p>-->
                <p>Precio: $${product.precio.toFixed(2)}</p>
                <!--<p>Cantidad: ${product.cantidad}</p>-->
            </div>
            <button class="detalleBoton">Ver más</button>
        `;
        
        // Agregar botón de detalle
        let detailButton = productCard.querySelector('.detalleBoton');
        detailButton.addEventListener("click", () => {
            window.location.href = `/src/pages/detalle_producto/${product.id}.html`; // Redirigir a la página del producto
        });

        productContainer.appendChild(productCard);
    });

    // Si no se encontraron productos para la categoría
    if (productsList.length === 0) {
        productContainer.innerHTML = "<p>No se encontraron productos para esta categoría.</p>";
    }
};

// Función principal para configurar el filtrado
const setupProductFiltering = async () => {
    //if (window.location.pathname.includes("productos.html")) { // Ajustar la URL según sea necesario
        const categoryParam = getQueryParameter('category') || 'Todo';
        await loadProducts(categoryParam);
    };

// Ejecutar la función de configuración al cargar la página
window.onload = setupProductFiltering;


// Manejar eventos de clic en los enlaces del menú desplegable
document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', async (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace
        const selectedCategory = item.getAttribute('href').split('category=')[1];
        
        // Actualizar la URL con el parámetro de categoría
        window.history.pushState({}, '', `productos.html?category=${selectedCategory}`);
        
        // Cargar productos filtrados
        await loadProducts(selectedCategory);
    });
});


/*-----------------------------------------------*/



/* ------------------------- */
/*Aquí se guarda lo del localStorage y se ve reflejado en el contador del carrito */
/*¿¿¿¿¿ Debería estar en encabezado????  Muestra el número*/
const carritoCounter = () => {
    /* cantidadCarrito.style.display = "block" */
    /* const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength")); */
    const carritoLength = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    const cantidadCarrito = document.getElementById("cantidadCarrito");
    if (cantidadCarrito) {
        cantidadCarrito.innerText = carritoLength;
    }
};
carritoCounter();

/* -------------------- */
const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

 //Boton arriba
document.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calcula el porcentaje de desplazamiento de la página
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
    
    // Muestra el botón cuando el usuario ha desplazado más allá del 40% del contenido de la página
    if (scrollPercent > 40) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });
  
  document.getElementById('scrollTopBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  });
  

/* ARLETE: Se exportan para usar en compras */
export { getProducts }
export { saveLocal }
export { carritoCounter, filterProductsByCategory }
export { eliminarProducto }
export {getQueryParameter}
export {loadProducts }
export {displayProducts}
//============== spinner
// Función para mostrar el spinner
function showSpinner() {
    document.getElementById('spinner-prod').style.display = 'flex';
  }
  
  // Función para ocultar el spinner
  function hideSpinner() {
    document.getElementById('spinner-prod').style.display = 'none';
  }
  
  // Mostrar el spinner al cargar la página
  window.addEventListener('load', () => {
    showSpinner();
    // Simular un retraso para ocultar el spinner (por ejemplo, después de 1 segundo)
    setTimeout(hideSpinner, 1000);
  });
  