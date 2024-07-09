/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './contactanos.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'
import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'

document.querySelector("#navbar_app").innerHTML= navbarApp();
document.querySelector("#footer_app").innerHTML= footerApp();

/* ------------------------------------------------------------- */

/* Aquí comienzan los JS particulares de Contáctanos */

console.log("Espero por todos los Dioses que te logres conectar");

/*Vamos a crear variables que validen en consola lo que el formulario está haciendo, estas se encuentran en el HTML 
con su respectivo "id="*/


//Declarar las variables globalmente/

const nombre = document.getElementById('name');
const telefono = document.getElementById('phone');
const apellido = document.getElementById('last-name');
const email = document.getElementById('email');
const comentarios = document.getElementById('message');

document.getElementById('form').addEventListener('submit', function(event) {
    // Validar que no estén vacíos
    if (nombre.value === '' || telefono.value === '' || apellido.value === '' || email.value === '' || comentarios.value === '') {
        // Evitar el envío del formulario
        event.preventDefault();
        
        // Mostrar alerta
        alert('Hola, no puedes dejar campos vacíos :D');
    }
}); 
