/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss' /* Estilos generales */
import '/src/components/footer/footer.css' /* Estilos del pie de pagina */
import '/src/components/navbar/navbar.css' /* Estilo de la barra de navegacion */
<<<<<<< HEAD
import { navbarApp } from './src/components/navbar/navbar_app.js' /* funcionalidad de la barra de navegacion */
import { footerApp } from './src/components/footer/footer_app.js' /* funcionalidad del pie de pagina */
=======
import { navbarApp } from '/src/components/navbar/navbar_app.js' /* funcionalidad de la barra de navegacion */
import { footerApp } from '/src/components/footer/footer_app.js' /* funcionalidad del pie de pagina */
>>>>>>> 2ae08e65fffd425d2188ab99b0276ee3e4c66fca

document.querySelector("#navbar-app").innerHTML= navbarApp(); /* insertar función navbarapp dentro del html */
document.querySelector("#footer-app").innerHTML= footerApp();