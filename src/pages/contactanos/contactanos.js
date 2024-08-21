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
        Swal.fire({
          icon: "warning",
          title: "¡Hola!",
          text: "No puedes dejar los campos vacíos.",
        });
    } else {
      Swal.fire({
        icon: "success",
        title: "¡Gracias por tus comentarios!",
        text: "Se han enviado, correctamente.",
      });      
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
  // Función para mostrar el spinner
function showSpinner() {
  document.getElementById('spinner-cont').style.display = 'flex';
}

// Función para ocultar el spinner
function hideSpinner() {
  document.getElementById('spinner-cont').style.display = 'none';
}

// Mostrar el spinner al cargar la página
window.addEventListener('load', () => {
  showSpinner();
  // Simular un retraso para ocultar el spinner (por ejemplo, después de 1 segundo)
  setTimeout(hideSpinner, 1000);
});