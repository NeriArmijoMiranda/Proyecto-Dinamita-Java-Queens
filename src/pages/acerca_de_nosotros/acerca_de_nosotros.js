/* ----NO BORRAR------------ */
/* Aquí van las rutas de conexión */
import '/style.scss'
import * as bootstrap from 'bootstrap' /* Para desplegar el menú / activar cosas de bootstrap */
import './acerca_de_nosotros.css'
import '/src/components/footer/footer.css'
import '/src/components/navbar/navbar.css'

import { navbarApp } from '/src/components/navbar/navbar_app.js'
import { footerApp } from '/src/components/footer/footer_app.js'

/*Para que se vean los icons de los botones */
import 'bootstrap-icons/font/bootstrap-icons.css';


document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

/* ------------------------------------------------------------- */
/* Aquí van los estilos personalizados de Acerca-de-nosotros */

/* Tarjetas de presentacion */
const integrante = { 
    nombre : " Alejandra Alvarado Contreras ",
    rol : "Desarrollador Java FullStack" ,
    frase: " \" El autoconocimiento, la gestión emocional y el aprendizaje continuo conducen al inevitable estado de ser tú mismo y a la construcción de tu propio destino \"🌱💫 Ale Alvarado",
    linkedin: "https://www.linkedin.com/in/alejandra-alvarado-003681191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/AlejandraAC",
    correo: "ale.alvarado.contreras@gmail.com",
    image:  "/img/Ale_.png",
};

const integrantes = [   integrante   ];

integrantes.push(  { 
    nombre : " Desire Guadalupe García Yañez ",
    rol : " Desarrollador Java FullStack " ,
    frase: "\" Puede que el camino sea duro y atravieses por procesos en los que no sepas cómo salir. Pero no tengas miedo porque estoy contigo cada día de tu vida \" - Isaías 41:10 ", 
    linkedin: "https://www.linkedin.com/in/desire-garcia-ya%C3%B1ez-282b29181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/dessgrc1609",
    correo: "desiregrc@gmail.com",
    image: "/img/Desire_.png",
}  );

integrantes.push(  { 
    nombre : " Ivonne Abigail Mendoza Cervantes ",
    rol : " Desarrollador Java FullStack " ,
    frase: " \" ¡No te rindas, no debes sentirte avergonzado por caer! ¡La verdadera vergüenza está en no volver a levantarse! \" - Shintaro Midorima ",
    linkedin: "https://www.linkedin.com/in/ivonne-abigail-mendoza-cervantes-00770b312/",
    github: "https://github.com/EusbekMendoza?tab=repositories",
    correo: "abhyinfinito@hotmail.com", 
    image: "/img/Mendoza_.png",
}  );

integrantes.push(  { 
    nombre : " Jazmín Guadalupe Cruz Ibarra ",
    rol : " Desarrollador Java FullStack " ,
    frase: " \" Entre más fuerte trabajes, más complicado será que te des por vencido \" - Vincent Lombardi", 
    linkedin: "https://www.linkedin.com/in/jazm%C3%ADn-cruz-857383241/",
    github: "https://github.com/JazzCI",
    correo: "jazzpchan.93@gmail.com",
    image: "/img/Jazz_.png",
}  );

integrantes.push(  { 
    nombre : " Jessica Arlette Miranda Chávez ",
    rol : " Desarrollador Java FullStack " ,
    frase: "\" El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito \" - Albert Schweitzer ", 
    linkedin: "https://www.linkedin.com/in/arlette-miranda/",
    github: " https://github.com/Arlette-Miranda",
    correo: "arlettemirandac@gmail.com",
    image: "/img/Arlette_.png",
}  );

integrantes.push(  { 
    nombre : " Jhorleny Arrellano Chávez ",
    rol : " Desarrollador Java FullStack " ,
    frase: "\" Cree en ti, esfuérzate y hazlo posible \" ",
    linkedin: "https://www.linkedin.com/in/jhorleny-arellano/",
    github: "https://github.com/Jhorchss",
    correo: "jhorleny.business@gmail.com",
    image: "/img/Jhor_.png", 
}  );

integrantes.push(  { 
    nombre : " Marbella Magaly Cabrera Durán ",
    rol : " Desarrollador Java FullStack " ,
    frase: "\" La vida es como una bicicleta, para mantener el equilibrio, debes seguir adelante \" - Albert Einstein", 
    linkedin: "https://www.linkedin.com/in/marbella-magaly-cabrera-dur%C3%A1n-649584278/",
    github: "https://github.com/marbellacabrera",
    correo: "marbecduran@gmail.com",
    image: "/img/Marbe_.png",
}  );

integrantes.push(  { 
    nombre : " Neri Armijo Miranda ",
    rol : " Desarrollador Java FullStack " ,
    frase: " \" El éxito es la suma de pequeños esfuerzos repetidos día tras día \" - Robert Collier  ",
    linkedin: "https://www.linkedin.com/in/neri-armijo-miranda-821318195/",
    github: "https://github.com/NeriArmijoMiranda",
    correo: "neriarmijomiranda530@gmail.com", 
    image: "/img/Neri_.png",
}  );

const crearTarjeta = (etiqueta) => {        
    return `
    <!-- card -->
        <div class="card mb-5 rounded-3 text-center offset-1 col-sm-7 col-md-5 col-lg-3">
            <!-- avatar -->
            <div class="avatar avatar-xl mt-n7 ms-4">
                <img src="${etiqueta.image}" alt="Image" class="rounded-circle border-4
                border-white-color-40 width="350" height="100" style= margin-top: 20px;">
            </div>
            <!-- card body -->
            <div class="card-body">
                <!-- Title -->
                <h4 class="mb-1">${etiqueta.nombre}</h4>
                <p>${etiqueta.rol}</p>
                <p>${etiqueta.frase}</p>
                <div>
                <!-- Dropdown -->
                    <div class= "d-flex ="justify-content-center align-items-center style= "margin-top: 20px;"">
                        <a href="${etiqueta.linkedin}"  class="btn btn-outline-primary">
                        <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="${etiqueta.github}"  class="btn btn-dark">
                        <i class="bi bi-github"></i>
                        </a>
                    <a href="mailto:${etiqueta.correo}" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="${etiqueta.correo}">
                    <i class="bi bi-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
</div>`
}


    const crearArregloTarjetas = ( integrantes ) => {
    let arregloFinalTarjetas = "";
    for (let i = 0; i< integrantes.length; i++){
        arregloFinalTarjetas = arregloFinalTarjetas + crearTarjeta(integrantes[i]);
    }
    console.log(arregloFinalTarjetas);
    return arregloFinalTarjetas;
};


arregloTarjetas.innerHTML = crearArregloTarjetas(integrantes);