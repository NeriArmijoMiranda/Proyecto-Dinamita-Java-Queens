/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './datos_de_envio.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'
import { carritoCounter } from '../Productos/Productos.js'

document.querySelector("#navbar-app").innerHTML = navbarApp();
document.querySelector("#footer-app").innerHTML = footerApp();

/* ------------------------------------------------------------- */
/* Función para presentar los valores default al cargar la página----------------------> */
document.addEventListener("DOMContentLoaded", () => {
    const stateSelect = document.getElementById('estados');
    const cityInput = document.getElementById('city');
    /* Resetear la ciudad si el estado cambia */
    stateSelect.addEventListener('change', () => {
        const state = stateSelect.value;

        // Lógica para actualizar las ciudades según el estado seleccionado
        if (state === "") {
        } else {
            cityInput.value = ""; // Limpia el campo si no es "Ciudad de México"
        }
    });

    // Rellenar el formulario con los datos guardados si existen
    const savedShippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));
    if (savedShippingAddress) {
        document.getElementById('full-name').value = savedShippingAddress.fullName;
        document.getElementById('estados').value = savedShippingAddress.state;
        document.getElementById('city').value = savedShippingAddress.city;
        document.getElementById('neighborhood').value = savedShippingAddress.neighborhood;
        document.getElementById('street').value = savedShippingAddress.street;
        document.getElementById('postal-code').value = savedShippingAddress.postalCode;
        document.getElementById('phone').value = savedShippingAddress.phone;
        document.getElementById('additional-info').value = savedShippingAddress.additionalInfo;
        document.getElementById('default-address').checked = savedShippingAddress.isDefaultAddress;
    }

    // Rellenar el formulario de tarjeta con los datos guardados si existen
    const savedCardData = JSON.parse(localStorage.getItem('cardData'));
    if (savedCardData) {
        document.getElementById('card-number').value = savedCardData.cardNumber;
        document.getElementById('card-name').value = savedCardData.cardName;
        document.getElementById('exp-month').value = savedCardData.expMonth;
        document.getElementById('exp-year').value = savedCardData.expYear;
        document.getElementById('cvc').value = savedCardData.cvc;
        document.getElementById('default-card').checked = savedCardData.isDefaultCard;
    }
});
// Mostrar el total en la página de pago

// Función para calcular el total de la compra acumulada en el carrito------------------------>
function calculateTotal() {
    const total = parseFloat(localStorage.getItem('totalCompra')) || 0;
    const descuento = 0.10; // 10% de descuento
    const totalConDescuento = total * (1 - descuento); // Aplica el descuento
    return totalConDescuento.toFixed(2);
}

// Función para mostrar el total en el campo de entrada
function displayTotal() {
    const total = calculateTotal();
    const totalElement = document.getElementById('totalPago');
    if (totalElement) {
        totalElement.value = `$${total} mxn`; // Usa .value para los campos de entrada
    } else {
        console.error('Elemento con ID "totalPago" no encontrado.');
    }
}

// Ejecuta displayTotal cuando el contenido del DOM se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    displayTotal(); // Muestra el total al cargar la página
});

console.log(localStorage.getItem('totalCompra'));

// Función para el Botón Regresar-------------------------------------------------------------------->
function goBack() {
    window.location.href = '/src/pages/compras/compras.html'; // 
}

// Añadir evento de clic al botón cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.btn-guardar-r');
    backButton.addEventListener('click', goBack);
});

/* Función para validar campos del formulario----------------------------------------------------------------> */
function validateForm(formId) {
    const form = document.getElementById(formId);
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    // Limpiar mensajes de error anteriores
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            // Crear y mostrar el mensaje de error
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = `Por favor, complete el campo: ${field.placeholder}`;
            field.parentNode.insertBefore(errorMessage, field.nextSibling); // Insertar el mensaje después del campo
        } 
    });
    return isValid;
} 

// Validación de los campos de entrada------------------------------------------------------------>
/* ----------------------------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    /* Dirección de envío---------------------------------------------------------------> */
    const saveShippingButton = document.querySelector('.btn-guardar');
    saveShippingButton.addEventListener('click', () => {
        if (validateForm('shipping-form')) { // 
            saveShippingAddress(); // Solo guardar si el formulario de envío es válido
        }
    });

    // Función para guardar la dirección de envío
    function saveShippingAddress() {
        const fullName = document.getElementById('full-name').value;
        const state = document.getElementById('estados').value;
        const city = document.getElementById('city').value;
        const neighborhood = document.getElementById('neighborhood').value;
        const street = document.getElementById('street').value;
        const postalCode = document.getElementById('postal-code').value;
        const phone = document.getElementById('phone').value;
        const additionalInfo = document.getElementById('additional-info').value;
        const isDefaultAddress = document.getElementById('default-address').checked;

        const shippingAddress = {
            fullName,
            state,
            city,
            neighborhood,
            street,
            postalCode,
            phone,
            additionalInfo,
            isDefaultAddress
        };

        // Guardar en localStorage
        localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));

        // Imprimir en la consola
        console.log('Dirección de envío guardada:', shippingAddress);

        // Mensaje de confirmación
        Swal.fire({
            icon: "success",
            title: "La dirección se ha guardado exitosamente",
          });      
    }

    // Evento de clic al botón cuando el DOM esté completamente cargado-------->
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.querySelector('.localstore-direccion');
        button.addEventListener('click', saveShippingAddress);
    });

    /* Dirección de tarjeta---------------------------------------------------------------------> */
    const saveCardButton = document.querySelector('.localstore-tarjeta');
    saveCardButton.addEventListener('click', () => {
        if (validateForm('card-form')) { // Asegúrate de que el formulario tenga el ID 'card-form'
            saveCardData(); // Solo guardar si el formulario de tarjeta es válido
        }
    });
    // Función para guardar los datos de la tarjeta
    function saveCardData() {
        const cardNumber = document.getElementById('card-number').value;
        const cardName = document.getElementById('card-name').value;
        const expMonth = document.getElementById('exp-month').value;
        const expYear = document.getElementById('exp-year').value;
        const cvc = document.getElementById('cvc').value;
        const isDefaultCard = document.getElementById('default-card').checked;

        const cardData = {
            cardNumber,
            cardName,
            expMonth,
            expYear,
            cvc,
            isDefaultCard
        };

        // Guardar en localStorage
        localStorage.setItem('cardData', JSON.stringify(cardData));

        // Imprimir en la consola
        console.log('Datos de la tarjeta guardados:', cardData);

        // Mensaje de confirmación
        Swal.fire({
            icon: "success",
            title: "La dirección se ha guardado exitosamente",
          });  
    }

    // Evento de clic al botón cuando el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.querySelector('.btn-guardar-tarjeta');
        button.addEventListener('click', saveCardData);
    });
});

/* Función para validar y enviar el formulario-----------------------------------------------------------> */
function validateAndSubmit() {
    const requiredFields = [
        'full-name', 'estados', 'city', 'neighborhood',
        'street', 'postal-code', 'phone', 
        'card-number', 'card-name', 'exp-month', 'exp-year', 'cvc'
    ];

    let valid = true;

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value || field.value === 'Selecciona un estado') {
            field.style.borderColor = 'red';
            valid = false;
        } else {
            field.style.borderColor = '';
        }
    });

    // Validar que el campo cvc tenga exactamente 4 dígitos
    const cvcField = document.getElementById('cvc');
    if (cvcField.value.length !== 4) {
        cvcField.style.borderColor = 'red';
        valid = false;
        Swal.fire({
            icon: "warning",
            title: "¡Error!",
            text: "El código de seguridad (CVC) debe tener exactamente 4 dígitos.",
        });
    } else {
        cvcField.style.borderColor = '';
    }

    if (valid) {
        Swal.fire({
            icon: "success",
            title: "La dirección se ha guardado exitosamente",
          });  
        const form = document.createElement('form');
        form.action = 'https://formsubmit.co/abhyinfinito4@gmail.com';
        form.method = 'POST';
        form.style.display = 'none';

        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = fieldId;
            input.value = field.value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    } else {
        Swal.fire({
            icon: "warning",
            title: "¡Hola!",
            text: "Completa todos los campos, por favor...",
          });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.querySelector('.btn-confirmar');
    confirmButton.addEventListener('click', validateAndSubmit);
});
