/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './contactanos.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'
import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'
import { carritoCounter } from '../Productos/Productos.js'
import Swal from 'sweetalert2'

document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();


/* ------------------------------------------------------------- */

/* Aquí comienzan los JS particulares de Contáctanos */

//console.log("Espero por todos los Dioses que te logres conectar");

/*Vamos a crear variables que validen en consola lo que el formulario está haciendo, estas se encuentran en el HTML 
con su respectivo "id="*/


// Declarar las variables globalmente
const nombre = document.getElementById('name');
const telefono = document.getElementById('phone');
const apellido = document.getElementById('last-name');
const email = document.getElementById('email');
const comentarios = document.getElementById('message');

// Función para mostrar alertas
function showAlert(message, type = 'error') {
    const alertContainer = document.getElementById('alert-container');
    const alertDiv = document.createElement('div');
    
    alertDiv.className = `alert alert-${type} show`;
    alertDiv.innerText = message;
    
    alertContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir una nueva alerta
    alertContainer.appendChild(alertDiv);
    
    // Ocultar la alerta después de 5 segundos
    setTimeout(() => {
        alertDiv.classList.remove('show');
        alertContainer.innerHTML = ''; // Limpiar el contenedor
    }, 5000);
}

// Validar campos en el formulario
document.getElementById('form').addEventListener('submit', function(event) {
    // Obtener los valores de los campos
    const nombreValue = nombre.value;
    const telefonoValue = telefono.value;
    const apellidoValue = apellido.value;
    const emailValue = email.value;
    const comentariosValue = comentarios.value;

    // Validar que no estén vacíos
    if (nombreValue === '' || telefonoValue === '' || apellidoValue === '' || emailValue === '' || comentariosValue === '') {
        // Evitar el envío del formulario
        event.preventDefault();
        
        // Mostrar alerta de error
        showAlert('Hola, no puedes dejar campos vacíos :D.', 'error');
    } else {
        // Mostrar alerta de éxito
        showAlert('Gracias, tus datos han sido enviados', 'success');
    }
});


 //Boton arriba
 document.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calcula el porcentaje de desplazamiento de la página
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
    
    // Muestra el botón cuando el usuario ha desplazado más allá del 40% del contenido de la página
    if (scrollPercent > 40) {
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