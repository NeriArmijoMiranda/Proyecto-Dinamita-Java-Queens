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

/* Define las funciones de las operaciones CRUD (Productos)  */

const fs = require('fs');
const path = require('path');

/* llama el archivo JSON */
const dataFile = path.join(__dirname, '../../data.json');

// Función para leer los datos del archivo JSON
const readData = () => {
    const data = fs.readFileSync(dataFile);
    return JSON.parse(data);
};

// Función para escribir los datos en el archivo JSON
const writeData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

// Lee la lista
exports.getLists = (req, res) => {
    const data = readData();
    res.send(lists);
};

exports.getList = (req, res) => {
    const lists = readData().lists;
    const list = lists.find(l => l.id === parseInt(req.params.id));
    if (!list) {
        return res.status(404).send('Producto no encontrada');
    }
    res.send(list);
};

// Crea el producto
exports.createList = (req, res) => {
    const data = readData();
    const newLists = data.lists || [];
    const newList = {
        id: Date.now(),
        ...req.body
    };
    newLists.push(newList);
    data.lists = newLists;
    writeData(data);
    res.send(newList);
};

// Lee el producto por su Id
exports.getListById = (req, res) => {
    const data = readData();
    const listId = parseInt(req.params.id);
    const list = data.lists.find(list => list.id === listId);
    if (!list) {
        return res.status(404).send('Producto no encontrada');
    }
    res.send(list);
};

// Actualiza el producto
exports.updateList = (req, res) => {
    const data = readData();
    const listId = parseInt(req.params.id);
    const listIndex = data.lists.findIndex(list => list.id === listId);
    if (listIndex === -1) {
        return res.status(404).send('Producto no encontrada');
    }
    data.lists[listIndex].name = req.body.name;
    writeData(data);
    res.send(data.lists[listIndex]);
};

// Borra el producto
exports.deleteList = (req, res) => {
    const data = readData();
    const listId = parseInt(req.params.id);
    const listIndex = data.lists.findIndex(list => list.id === listId);
    if (listIndex === -1) {
        return res.status(404).send('Producto no encontrada');
    }
    const deletedList = data.lists.splice(listIndex, 1);
    writeData(data);
    res.send(deletedList);
};