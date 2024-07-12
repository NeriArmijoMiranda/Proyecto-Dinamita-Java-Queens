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

const express = require('express');
const router = express.Router();
const listsController = require('./src/components/apiAdm/api/controllers/listsController');

// Rutas para las listas
router.get('/', listsController.getLists); // Obtener todas las listas
router.post('/', listsController.createList); // Crear una nueva lista
router.get('/:id', listsController.getListById); // Obtener una lista por su ID
router.put('/:id', listsController.updateList); // Actualizar una lista existente
router.delete('/:id', listsController.deleteList); // Eliminar una lista

module.exports = router;