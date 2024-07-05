/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './Iniciar-Sesión.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar-app.js'
import { footerApp } from '/src/components/footer/footer-app.js'


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------- */