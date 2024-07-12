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

/* Manejo de datos y campos correctamente (parte Frontend) */

document.addEventListener('DOMContentLoaded', function () {
    const listForm = document.getElementById('list-form_Adm');
    const form = document.getElementById('crud-form_Admn');
    const lists = document.getElementById('lists_Adm');
    const itemsList = document.getElementById('items-list_Admn');

    // Funcion para cargar los items de los productos

    const displayLists = (listsData) => {
        lists.innerHTML = '';
        listsData.forEach(list => {
            const listElement = document.createElement('li');
            listElement.className = 'list-group-item_Adm';
            listElement.innerHTML = `
                <div class="list_Adm d-flex justify-content-between align-items-center">
                    <div>
                        <h5>${list.name}</h5>
                    </div>
                    <div>
                        <button class="btn_Adm btn-primary btn-sm" onclick="selectList(${list.id})">Seleccionar</button>
                        <button class="btn_Adm btn-danger btn-sm" onclick="deleteList(${list.id})">Eliminar</button>
                    </div>
                </div>
            `;
            lists.appendChild(listElement);
        });
    };


    const displayItems = (items) => {
        itemsList.innerHTML = '';
        items.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.className = 'list-group-item_Adm';
            itemElement.innerHTML = `
            <div class="item_Adm d-flex justify-content-between align-items-center">
                    <div>
                        <h5>${item.nombre}</h5>
                        <p>Precio: ${item.precio}</p>
                        ${item.imagen ? `<img src="${item.imagen}" alt="${item.nombre}" width="100px" height="100px">` : ''}
                        <p>Origen: ${item.origen}</p>
                        <p>Talla: ${item.talla}</p>
                        <p>Cantidad: ${item.cantidad}</p>
                        <p>Descripción: ${item.descripcion}</p>
                    </div>
                    <div>
                        <button class="btn_Adm btn-warning btn-sm" onclick="editItem(${item.id})">Editar</button>
                        <button class="btn_Adm btn-danger btn-sm" onclick="deleteItem(${item.id})">Eliminar</button>
                    </div>
                </div>
                `;
                itemsList.appendChild(itemElement);
        });
    };

    // Funcion para obtener las listas del servidor
    const getLists = () => {
        fetch('/api/lists')
            .then(response => response.json())
            .then(data => displayLists(data))
            .catch(error => console.error('Error obteniendo listas:', error));
    };

    // Funcion para obtener los items del servidor
    const getItems = (listId) =>{
        fetch(`/api/items?listId=${listId}`)
        .then(response => response.json())
            .then(data => displayItems(data))
            .catch(error => console.error('Error obteniendo items:', error));
    };

    // Funcion para crear un nuevo producto
    const createList = (listData) => {
        fetch('/api/lists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listData)
        })
            .then(response => response.json())
            .then(data => {
                getLists();
                listForm.reset();
            })
            .catch(error => console.error('Error creando lista:', error));
    };

    // Funcion para crear un nuevo item
    const createItem = (formData) => {
        fetch('/api/items', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                getItems();
                form.reset();
            })
            .catch(error => console.error('Error creando item:', error));
    };

    // Función para actualizar un item existente
    const updateItem = (id, formData) => {
        fetch(`/api/items/${id}`, {
            method: 'PUT',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                getItems();
                form.reset();
                form.dataset.id = '';
            })
            .catch(error => console.error('Error actualizando item:', error));
    };

    // Funcion para eliminar un producto
    const deleteList = (id) => {
        fetch(`/api/lists/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => getLists())
            .catch(error => console.error('Error eliminando lista:', error));
    };

    // Función para eliminar un item
    const deleteItem = (id) => {
        fetch(`/api/items/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => getItems())
            .catch(error => console.error('Error eliminando item:', error));
    };

    // Evento para manejar el envío del formulario
    listForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const listData = {
            name: listForm.listName.value
        };
        createList(listData);
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const id = form.dataset.id;

        if (id) {
            updateItem(id, formData);
        } else {
            createItem(formData);
        }
    });

    // Función para llenar el formulario con los datos de un item para editar
    window.editItem = (id) => {
        fetch(`/api/items/${id}`)
            .then(response => response.json())
            .then(item => {
                form.dataset.id = item.id;
                form.nombre.value = item.nombre;
                form.precio.value = item.precio;
                form.origen.value = item.origen;
                form.talla.value = item.talla;
                form.cantidad.value = item.cantidad;
                form.descripcion.value = item.descripcion;
            })
            .catch(error => console.error('Error obteniendo item:', error));
    };

    // Función para resetear el formulario
    window.resetForm = () => {
        form.reset();
        form.dataset.id = '';
    };

    // Obtener los items al cargar la página
    getItems();
});
