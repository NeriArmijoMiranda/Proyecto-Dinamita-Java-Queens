import '/style.scss';
import * as bootstrap from 'bootstrap';
import './form_crea_objetos.css';
import '/src/components/footer/footer.css';
import '/src/components/navbar/navbar.css';

import { navbarApp } from '/src/components/navbar/navbar_app.js';
import { footerApp } from '/src/components/footer/footer_app.js';
import { carritoCounter } from '../Productos/Productos.js';

document.querySelector("#navbar-app").innerHTML = navbarApp();
document.querySelector("#footer-app").innerHTML = footerApp();

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
        form.classList.add('was-validated');
        Swal.fire({
            icon: "error",
            title: "Por favor, complete todos los campos requeridos correctamente",
        });
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
        imagen: '', // Aquí guardaremos el archivo de imagen en formato base64
        origen: document.getElementById('origen').value,
        talla: document.getElementById('talla').value,
        cantidad: parseInt(document.getElementById('cantidad').value),
        descripcion: document.getElementById('descripcion').value
    };

    // Manejar la imagen seleccionada
    let fileInput = document.getElementById('imagen');
    if (fileInput.files.length > 0) {
        let file = fileInput.files[0];
        let reader = new FileReader();

        reader.onloadend = function() {
            product.imagen = reader.result; // Convertir a base64
            // Ahora que tenemos la imagen, convertir el objeto a JSON y mostrar el alert
            let productJSON = JSON.stringify(product);
            console.log('Producto JSON:', productJSON);

            // Mostrar alerta de éxito
            Swal.fire({
                icon: "success",
                title: "Producto Creado Correctamente",
            });
        };

        reader.readAsDataURL(file); // Convertir a base64
    } else {
        // Si no se seleccionó imagen, aún podemos crear el producto sin la imagen
        let productJSON = JSON.stringify(product);
        console.log('Producto JSON:', productJSON);

        // Mostrar alerta de éxito
        Swal.fire({
            icon: "success",
            title: "Producto Creado Correctamente",
        });
    }
}

carritoCounter();
