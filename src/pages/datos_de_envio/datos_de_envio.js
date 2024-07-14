/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './datos_de_envio.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function() {
    // Aquí puedes agregar la lógica para obtener el total del carrito de compras y
    // asignarlo al campo "total"
    document.getElementById('total').value = getCartTotal();
});

function saveShippingAddress() {
    const shippingData = {
        region: document.getElementById('region').value,
        fullName: document.getElementById('full-name').value,
        street: document.getElementById('street').value,
        postalCode: document.getElementById('postal-code').value,
        state: document.getElementById('state').value,
        city: document.getElementById('city').value,
        neighborhood: document.getElementById('neighborhood').value,
        phone: document.getElementById('phone').value,
        additionalInfo: document.getElementById('additional-info').value,
        defaultAddress: document.getElementById('default-address').checked
    };
    console.log('Dirección de envío guardada:', shippingData);
    alert('Dirección de envío guardada');
}

function saveCard() {
    const cardData = {
        cardNumber: document.getElementById('card-number').value,
        cardName: document.getElementById('card-name').value,
        expMonth: document.getElementById('exp-month').value,
        expYear: document.getElementById('exp-year').value,
        cvc: document.getElementById('cvc').value,
        defaultCard: document.getElementById('default-card').checked
    };
    console.log('Tarjeta guardada:', cardData);
    alert('Tarjeta guardada');
}

function confirmPayment() {
    const paymentData = {
        shipping: {
            region: document.getElementById('region').value,
            fullName: document.getElementById('full-name').value,
            street: document.getElementById('street').value,
            postalCode: document.getElementById('postal-code').value,
            state: document.getElementById('state').value,
            city: document.getElementById('city').value,
            neighborhood: document.getElementById('neighborhood').value,
            phone: document.getElementById('phone').value,
            additionalInfo: document.getElementById('additional-info').value,
            defaultAddress: document.getElementById('default-address').checked
        },
        card: {
            cardNumber: document.getElementById('card-number').value,
            cardName: document.getElementById('card-name').value,
            expMonth: document.getElementById('exp-month').value,
            expYear: document.getElementById('exp-year').value,
            cvc: document.getElementById('cvc').value,
            total: document.getElementById('total').value,
            defaultCard: document.getElementById('default-card').checked
        }
    };
    console.log('Datos de pago enviados:', paymentData);
    alert('Pago confirmado');
    // Aquí puedes agregar la lógica para enviar los datos al servidor
}

function goBack() {
    window.history.back();
}

function getCartTotal() {
    // Aquí puedes agregar la lógica para obtener el total del carrito de compras
    return "$100.00"; // Valor de ejemplo
}

