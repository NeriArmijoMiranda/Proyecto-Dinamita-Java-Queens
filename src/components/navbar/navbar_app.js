const navbarApp = () => {
  // Filtro para seleccionar la página visitada
  return `
        <nav class="navbar navbar-expand-lg mx-auto">
        <div class="container-fluid">
  
          <!-- Logo con link para redireccionar al Inicio -->
          <a id="logo-title" class="navbar-brand" href="index.html">
            <img class="logo-image " src="/img/logo_yoatzin.png"
              alt="Logo de Yoatzin con flores de colores y fondo negro ">
          </a>

          <!-- ---------Opciones celular -------------- -->

          <!-- Busqueda barra Celular-->
          <li class="nav-item d-block d-lg-none d-md-block d-sm-block justify-content-flex-start"> <!-- Mustra la barra arriba cuando se hace pequeño -->
            
          <div class="input-groupNav">
              
              <input type="text" id="search-input-mobile" class="form-control" placeholder="" aria-label="Búsqueda"
                aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary"  type="button" id="button-addon2">
                
              <!-- Se agrega ícono de lupa -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                  viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                </button>
          </div>

          </li>

          <!-- Compras celular -->
          <!--
          <li class="nav-item d-block d-lg-none d-md-block d-sm-block" >
            <a class="nav-link" href="/src/pages/compras/compras.html">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4"
                viewBox="0 0 16 16">
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </a>
          </li>
          -->
          <!-- ----------------------- -->
  
          <!-- Botón de Hamburguesa al comprimir la página -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <!-- Lista por colapsar -->
          <div class="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
            <ul class="navbar-nav mx-auto">
  
              <!-- Comienzan opciones de Menú -->
  
              <!-- ¿Quiénes somos? -->
              <li class="nav-item">
                <a class="nav-link" href="/src/pages/quienes_somos/quienes_somos.html">¿Quiénes somos?</a>
                <!-- <a class="nav-link active" aria-current="page" href="/src/pages/¿Quienes-somos/¿Quienes-somos.html"><strong>¿Quiénes somos?</strong></a> -->
                <!-- <a class="nav-link" href="#"> No está activa -->
                <!-- <a class="nav-link active" aria-current="page" href="#"> Está activa
                - nav-link active demuestra que esta activa esa página
                - aria-current nos ayuda a identificar en que pagina estamos -->
              </li>
  
              <!-- Producto con menú desplegable -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/src/pages/Productos/Productos.html" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false"><strong>
                  Productos</strong>
                </a>
                <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/src/pages/Productos/Productos.html?category=Todo">Todo</a></li>
    <li>
      <hr class="dropdown-divider">
    </li>
     <li class="nav-item" id="categorySection">
    <li><a class="dropdown-item" href="/src/pages/Productos/Productos.html?category=Cerámica">Cerámica</a></li>
    <li><a class="dropdown-item" href="/src/pages/Productos/Productos.html?category=Decoración">Decoración</a></li>
    <li><a class="dropdown-item" href="/src/pages/Productos/Productos.html?category=Joyería">Joyería</a></li>
    <li><a class="dropdown-item" href="/src/pages/Productos/Productos.html?category=Textiles">Textiles</a></li>
    </li>
  </ul>
</li>
  
              <!-- Contáctanos -->
              <li class="nav-item">
                <a class="nav-link" href="/src/pages/contactanos/contactanos.html">Contáctanos</a>
              </li>
  
              <!-- Busqueda barra--> <!-- none = no se muestra--> 
              <li class="nav-item d-none d-lg-block d-md-none d-sm-none"> <!-- La muestra cuando está grande y lo quita cuando es pequeño -->
                <div class="input-group">
                  <input type="text" id="search-input-desktop" class="form-control" placeholder="Buscar" aria-label="Búsqueda" aria-describedby="button-addon2">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    <!-- Se agrega ícono de lupa -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    
                  </button>
                </div>
              </li>

              <!-- Compras -->  
              <!-- <li id="verCarrito" class="nav-item d-none d-lg-block d-md-block"> --> <!-- La muestra cuando está grande y lo quita cuando es pequeño -->
               <a id="verCarrito" class="nav-link" href="/src/pages/compras/compras.html"> 
               <span id="cantidadCarrito" class="cantidad-carrito"> </span> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                Mi carrito
                <!--  </a>-->
              </li>
              
              <!-- Iniciar sesión -->
              <li class="nav-item">
                <a class="nav-link" href="/src/pages/iniciar_sesion/iniciar_sesion.html">Iniciar Sesión</a>
              </li>
  
            </ul><!-- Termina u-lista -->
  
          </div> <!-- Cierre colapsar -->
        </div> <!-- Cierre de contenedor fluido -->
      </nav> <!-- Se cierra Header -->
  `;
};

// Manejar eventos de clic en los enlaces del menú desplegable
document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace
        
        // Obtener el valor de la categoría desde el atributo href del enlace
        const selectedCategory = item.getAttribute('href').split('category=')[1];
        
        // Redirigir a la página de productos con el parámetro de categoría
        window.location.href = `/src/pages/Productos/Productos.html?category=${selectedCategory}`;
    });
});




export { navbarApp };
