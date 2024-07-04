const navbarApp = () => {
    // Filtro para seleccionar la página visitada
    return `
        <nav class="navbar navbar-expand-lg mx-auto">
        <div class="container-fluid">
  
          <!-- Logo con link para redireccionar al Inicio -->
          <a id="logo-title" class="navbar-brand" href="https://getbootstrap.com/docs/5.3/about/brand/#logo">
            <img class="logo-image rounded-3 " src="/public/img/LogoYoatzin.png"
              alt="Logo de Yoatzin con flores de colores y fondo negro ">
          </a>
  
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
                <a class="nav-link active" aria-current="page" href="/src/pages/¿Quienes-somos/¿Quienes-somos.html">¿Quiénes somos?</a>
                <!-- <a class="nav-link" href="#"> No está activa -->
                <!-- <a class="nav-link active" aria-current="page" href="#"> Está activa
                - nav-link active demuestra que esta activa esa página
                - aria-current nos ayuda a identificar en que pagina estamos -->
              </li>
  
              <!-- Producto con menú desplegable -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Productos
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Todo</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Cerámica</a></li>
                  <li><a class="dropdown-item" href="#">Decoración</a></li>
                  <li><a class="dropdown-item" href="#">Joyería</a></li>
                  <li><a class="dropdown-item" href="#">Textiles</a></li>
                </ul>
              </li>
  
              <!-- Contáctanos -->
              <li class="nav-item">
                <a class="nav-link" href="/src/pages/Contáctanos/contáctanos.html">Contáctanos</a>
              </li>
  
              <!-- Busqueda -->
              <li class="nav-item">
                <a class="nav-link" href="#"> <!-- Se agrega imagen de lupa -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                  Búsqueda
                </a>
              </li>
  
              <!-- Compras, ya tiene link de referencia -->
              <li class="nav-item">
                <a class="nav-link" href="/src/pages/Compras/Compras.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4"
                    viewBox="0 0 16 16">
                    <path
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg>
                  Compras
                </a>
              </li>
  
              <!-- Iniciar sesión -->
              <li class="nav-item">
                <a class="nav-link" href="#">Iniciar Sesión</a>
              </li>
  
            </ul><!-- Termina u-lista -->
  
          </div> <!-- Cierre colapsar -->
        </div> <!-- Cierre de contenedor fluido -->
      </nav> <!-- Se cierra Header -->
  `;
};

export { navbarApp };
