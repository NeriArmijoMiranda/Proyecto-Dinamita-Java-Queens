/* ----NO BORRAR------------ */
/*Aquí van las rutas de conexión */
import '/style.scss';
import * as bootstrap from 'bootstrap'; // Para desplegar el menú / activar cosas de bootstrap
import './iniciar_sesion.css';
import '/src/components/footer/footer.css';
import '/src/components/navbar/navbar.css';

import { navbarApp } from '/src/components/navbar/navbar_app.js';
import { footerApp } from '/src/components/footer/footer_app.js';

document.querySelector("#navbar-app").innerHTML = navbarApp();
document.querySelector("#footer-app").innerHTML = footerApp();

/* ------------------------------------------------------------ */

// Definición de saveUser
async function saveUser(user) {
    try {
        const response = await fetch('http://localhost:8080/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Usuario guardado con éxito:', data);
        return data;
    } catch (error) {
        console.error('Error al guardar el usuario:', error);
        throw error;
    }
}

// Definición de verifyUser (para iniciar sesión)
async function verifyUser(email, password) {
    try {
        const response = await fetch('http://localhost:8080/api/v1/users');
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const users = await response.json();
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            return user;
        } else {
            throw new Error('Email o contraseña incorrectos');
        }
    } catch (error) {
        console.error('Error al verificar el usuario:', error);
        throw error;
    }
}

// Obtener referencias a los formularios
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('from-crear');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Lógica para el formulario de inicio de sesión
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('inicio-email').value.trim();
    const password = document.getElementById('message').value.trim();

    // Verificar usuario en la API
    verifyUser(email, password).then((user) => {
        Swal.fire({
            icon: "success",
            title: "¡BIENVENIDO!",
        }).then(() => {
            window.location.href = '/index.html'; // Cambia 'index.html' por tu página de inicio
        });
    }).catch((error) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
    });
}); 

// Función para validar la contraseña
function validatePassword(password) {
    const upperCasePattern = /[A-Z]/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (!upperCasePattern.test(password)) {
        Swal.fire('La contraseña debe contener al menos una letra mayúscula.');
        return false;
    }

    if (!specialCharPattern.test(password)) {
        Swal.fire('La contraseña debe contener al menos un carácter especial. Ejemplo: [!@#$%^&*(),.?":{}|<>]');
        return false;
    }

    return true;
}

// Lógica para el formulario de registro
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('crear-email').value;
    const password = document.getElementById('contraseña').value;
    const confirmPassword = document.getElementById('confirmar-contraseña').value;
    const avisoAccepted = document.getElementById('aviso').checked;
    const termsAccepted = document.getElementById('terms').checked;

    // Validación de la longitud de la contraseña
    if (password.length < 10) {
        Swal.fire('La contraseña debe tener al menos 10 caracteres.');
        return;
    }

    // Validación de contraseña
    if (!validatePassword(password)) {
        return; // Detiene la ejecución si la contraseña no es válida
    }

    // Validación de coincidencia de contraseña
    if (password !== confirmPassword) {
        Swal.fire('Las contraseñas no coinciden.');
        return;
    }

    // Validación de aceptación de aviso y términos
    if (!avisoAccepted) {
        Swal.fire({
            icon: "info",
            title: "¡Debes aceptar el Aviso de Privacidad para crear la cuenta!",
        });
        return;
    }

    if (!termsAccepted) {
        Swal.fire({
            icon: "info",
            title: "¡Debes aceptar los Términos y Condiciones para crear la cuenta!",
        });
        return;
    }

    // Crear objeto del usuario
    const user = {
        "id": new Date().getTime(), // Generar un ID único temporalmente
        "privilege": {
            "idPrivilege": 2,
            "privilege": "cliente"
        },
        "name": name,
        "lastName": lastName,
        "phone": phone,
        "email": email,
        "password": password,
        "active": true
    };

    // Guardar en la API
    saveUser(user).then(() => {
        // Mostrar la alerta de éxito y redirigir
        Swal.fire({
            icon: 'success',
            title: '¡Registro Exitoso!',
            text: 'Tus datos han sido registrados con éxito.'
        }).then(() => {
            // Redirigir al inicio
            window.location.href = '/index.html';
        });
    });
});

// Botón para volver al inicio
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
