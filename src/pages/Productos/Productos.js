/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './Productos.css'
import '/Proyecto-Dinamita-Java-Queens/src/components/footer/footer.css'
import '/src/components/footer\footer-app.js'
import { navbarApp } from '/src/components/navbar/navbar-app.js'
import { footerApp } from '/src/components/footer/footer-app.js'


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------- */