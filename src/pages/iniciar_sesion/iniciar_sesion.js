/* ----NO BORRAR------------ */
/*Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './iniciar_sesion.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'


document.querySelector("#navbar-app").innerHTML = navbarApp();
document.querySelector("#footer-app").innerHTML = footerApp();

/* ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    //Obtener referencias a los formularios y elementos de entrada
    const loginForm = document.querySelector('form:first-of-type');
    const registerForm = document.querySelector('#from-crear');

    // Validar contraseñas en el formulario de inicio de sesión
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.querySelector('#content-wrap #email').value;
        const password = document.getElementById('message').value;
        const confirmPassword = document.getElementById('confirmacion').value;

        // Validación de la longitud de la contraseña
        if (password.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        // Validación de coincidencia de contraseña
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Guardar en localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        alert('Inicio de sesión exitoso y datos guardados en localStorage.');
        loginForm.submit(); // Descomentar esta línea si quieres enviar el formulario después de la validación
    });

    // Validar contraseñas en el formulario de registro
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const lastName = document.getElementById('last-name').value;
        const email = registerForm.querySelector('#email').value;
        const password = registerForm.querySelector('input[placeholder="Contraseña"]').value;
        const confirmPassword = registerForm.querySelector('#Confirmar-dos').value;

        // Validación de la longitud de la contraseña
        if (password.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        // Validación de coincidencia de contraseña
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Guardar en localStorage
        localStorage.setItem('userName', name);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('userLastName', lastName);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        alert('Registro exitoso y datos guardados en localStorage.');
        registerForm.submit(); // Descomentar esta línea si quieres enviar el formulario después de la validación
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        
        // Redirigir al usuario a la página de inicio
            window.location.href = '/index.html'; // Cambia 'inicio.html' por tu página de inicio
        
       
    });
});
