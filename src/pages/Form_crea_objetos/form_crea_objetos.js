/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './iniciar_sesion.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------- */

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        createProductObject();
    }
});

function validateForm() {
    let form = document.getElementById('productForm');
    let isValid = form.checkValidity();
    if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        return false;
    } else {
        form.classList.remove('was-validated');
        return true;
    }
}

function createProductObject() {
    let product = {
        id: document.getElementById('ID').value,
        categoria: document.getElementById('categoria').value,
        nombre: document.getElementById('nombre').value,
        precio: parseFloat(document.getElementById('precio').value),
        imagen: document.getElementById('imagen').value,
        origen: document.getElementById('origen').value,
        talla: document.getElementById('talla').value,
        cantidad: parseInt(document.getElementById('cantidad').value),
        descripcion: document.getElementById('descripcion').value
    };

    // Convertir a JSON
    let productJSON = JSON.stringify(product);
    console.log('Objeto JSON:', productJSON);

    // Mostrar alerta de éxito (puedes ajustar el comportamiento según tus necesidades)
    showAlert('Producto creado correctamente.', 'alert-success');
    }

    function showAlert(message, className) {
    // Crear elemento de alerta
    let alertDiv = document.createElement('div');
    alertDiv.className = `alert ${className} alert-dismissible fade show mt-3`;
    alertDiv.setAttribute('role', 'alert');

    // Contenido del alerta
    alertDiv.innerHTML = `
        <strong>${message}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    `;

    // Insertar el alerta en el DOM
    let container = document.querySelector('.container');
    container.insertBefore(alertDiv, document.getElementById('productForm'));

    // Cerrar alerta después de cierto tiempo (opcional)
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}
