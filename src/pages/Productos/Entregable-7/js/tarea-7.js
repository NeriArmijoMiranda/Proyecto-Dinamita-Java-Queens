
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
        <img src= "${product.imagen}" height="300px" width="400px" align-center>
        <h2>${product.nombre}</h2>
        <h3>${product.origen}</h3>
        <div class="descripcion" align-items-center>
        <p>${product.talla}</p>
        <p>${product.descripcion}</p>
        <p>${product.precio}$</p>
        <p>${product.cantidad}</p>
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


