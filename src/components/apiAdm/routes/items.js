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


/* Defina las rutas y las asocia con las funciones del controlador */

const express = require('express'); /* framework flexible para enrutar la BD desde el frontend con el backend */
const router = express.Router();
const itemsController = require('./src/components/apiAdm/api/controllers/itemsController');
const multer = require('multer'); /* maneja un mejor control de carga de imagenes */
const path = require('path');

// Configuracion de multer para manejar la carga de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, './src/pages/img_productos/') // Ruta donde se guardaran las imagenes
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) // Renombra el archivo para evitar conflictos futuros
    }
});

const upload = multer({ storage: storage }); //carga de imagen

// Llama las funciones CRUD

router.get('/', itemsController.getItems);
router.post('/', upload.single('imagen'), itemsController.createItem);
router.put('/:id', upload.single('imagen'), itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);

module.exports = router;