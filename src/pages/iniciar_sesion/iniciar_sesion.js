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
// Obtener referencias a los formularios
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('from-crear');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Validar contraseñas en el formulario de inicio de sesión
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('inicio-email').value;
    const password = document.getElementById('message').value;

    // Obtener contraseña guardada en localStorage
    const storedPassword = localStorage.getItem('userPassword');
    const storedEmail = localStorage.getItem('userEmail');

    // Validar si la contraseña y el email son correctos
    if (password === storedPassword && email === storedEmail) {
        alert('Inicio de sesión exitoso.');
        window.location.href = '/index.html'; // Cambia 'index.html' por tu página de inicio
    } else {
        alert('Contraseña o email incorrecto.');
    }
});

// Función para validar la contraseña
function validatePassword(password) {
    const upperCasePattern = /[A-Z]/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (!upperCasePattern.test(password)) {
        alert('La contraseña debe contener al menos una letra mayúscula.');
        return false;
    }

    if (!specialCharPattern.test(password)) {
        alert('La contraseña debe contener al menos un carácter especial, ejemplo: [!@#$%^&*(),.?":{}|<>]');
        return false;
    }

    return true;
}

// Validar contraseñas en el formulario de registro
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('crear-email').value;
    const password = document.getElementById('contraseña').value;
    const confirmPassword = document.getElementById('confirmar-contraseña').value;

    // Validación de la longitud de la contraseña
    if (password.length < 10) { // Actualiza el mínimo a 10 caracteres si lo deseas
        alert('La contraseña debe tener al menos 10 caracteres.');
        return;
    }

    // Validación de contraseña
    if (!validatePassword(password)) {
        return; // Detiene la ejecución si la contraseña no es válida
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

//Boton arriba
document.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calcula el porcentaje de desplazamiento de la página
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
    
    // Muestra el botón cuando el usuario ha desplazado más allá del 70% del contenido de la página
    if (scrollPercent > 50) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });
  
  document.getElementById('scrollTopBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  });
  