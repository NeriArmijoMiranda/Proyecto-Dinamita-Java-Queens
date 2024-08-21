/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss' /* Estilos generales */
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import '/src/components/footer/footer.css' /* Estilos del pie de pagina */
import '/src/components/navbar/navbar.css' /* Estilo de la barra de navegacion */
import { navbarApp } from './src/components/navbar/navbar_app.js' /* funcionalidad de la barra de navegacion */
import { footerApp } from './src/components/footer/footer_app.js' /* funcionalidad del pie de pagina */


document.querySelector("#navbar-app").innerHTML= navbarApp(); /* insertar función navbarapp dentro del html */
document.querySelector("#footer-app").innerHTML= footerApp();

/* ----------------------------------------------- */
//Boton arriba
document.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calcula el porcentaje de desplazamiento de la página
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
    
    // Muestra el botón cuando el usuario ha desplazado más allá del 70% del contenido de la página
    if (scrollPercent > 50) {
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
  