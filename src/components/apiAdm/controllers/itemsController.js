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


/* Define las funciones para las operaciones CRUD */

const fs = require ('fs');
const path = require ('path');

// Llama el archivo JSON

const dataFile = path.join(__dirname, '../../data.json');

const readData = () => {
    const data = fs.readFileSync(dataFile);
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

//Lee item existente
exports.getItems = (req, res) => {
    const Items = readData();
    res.send(Items);
};

exports.getItem = (read, res) => {
    const Items = readData();
    const item = Items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send('Item no encontrado');
    }
    res.send(item);
};

//Crea un nuevo Item
exports.createItem = (req, res) => {
    const Items = readData();
    const newItem = {
        id: Date.now(),
        ...req.body,
        image: req.file ? `./src/pages/img_productos/${req.file.filename}` : null
    };
    Items.push(newItem);
    writeData(Items);
    res.send(newItem);
};

//Actualiza un Item
exports.updateItem = (req, res) => {
    const Items = readData();
    const index = Items.findIndex(item => item.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Item no encontrado');
    }
    Items[index] = { ...Items[index], ...req.body };
    if(req.file) {
        Items[index].imagen = `./src/pages/img_productos/${req.file.filename}`;
    }
    writeData(Items);
    res.send(Items[index]);
};

//Elimina un item
exports.deleteItem = (req, res) => {
    const Items = readData();
    const index = Items.filter(item => item.id !== parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).ssend('Item no encontrado');
    }
    const deletedItem = Items.splice(index, 1); 
    writeData(Items);
    res.send({ deletedItem });
};