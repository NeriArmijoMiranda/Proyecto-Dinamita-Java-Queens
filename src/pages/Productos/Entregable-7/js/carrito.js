
const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito.</h1>
    `;

modalContainer.append(modalHeader);

/*Esta es para literalmente hacer que la X de cerrar obtenga esa función */

const modalbutton = document.createElement("h1");
modalbutton.innerHTML = "x";
modalbutton.className = "modal-header-button";

modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

modalHeader.append(modalbutton);

/*Aquí esta lo de sumar productos por si quiren quitarselo */

carrito.forEach((product) => { 
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${product.imagen}">
    <h3>${product.nombre}</h3>
    <h3>${product.origen}</h3>
    <p>${product.talla}</p>
    <p>${product.descripcion}</p>
    <p>${product.precio}$</p>
    <span class="restar"> - </span>
    <p>${product.cantidad}</p>
    <span class="sumar"> + </span>
    <p>Total: ${product.cantidad * product.precio}</p>
    <span class="delete-product"> ⚡ </span>

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
    totalBuying.innerHTML = `total a pagar: ${total} $`;
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