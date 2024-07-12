/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './formAdmn.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------- */


/**
 * ========= Parte Backend =========
 * 
 * Servidor Backend tipo BD 
 * donde se manipulan y almacenan los datos   
 */

const express = require('express'); /* framework flexible para enrutar la BD desde el frontend con el backend */
const bodyParser = require('body-parser'); /* va de la mano con Exprees para las solicitudes HTTP  */
const path = require('path'); 
const appAdmn = express();
const PORT = 5173;

// Carga de middleware
appAdmn.use(bodyParser.json());
appAdmn.use(express.static(path.join(__dirname,'FormAdmn_public'))); // abre archivos estaticos desde la carpeta FormAdmin_public

// Rutas de la API
const listsRoutes = require('./src/components/apiAdm/routes/lists');
const ItemsRoutes = require('./src/components/apiAdm/routes/items');

app.use('/api/lists', listsRoutes);
appAdmn.use('/api/items',ItemsRoutes);

// Iniciar Servidor
appAdmn.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
