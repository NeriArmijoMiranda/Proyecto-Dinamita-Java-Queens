/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './quienes_somos.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'
import { carritoCounter } from '../Productos/Productos.js'

document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------- */
carritoCounter();
 // Función para mostrar el spinner
function showSpinner() {
    document.getElementById('spinner').style.display = 'flex';
  }
  
  // Función para ocultar el spinner
  function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
  }
  
  // Mostrar el spinner al cargar la página
  window.addEventListener('load', () => {
    showSpinner();
    // Simular un retraso para ocultar el spinner (por ejemplo, después de 1 segundos)
    setTimeout(hideSpinner, 1000);
  });
  