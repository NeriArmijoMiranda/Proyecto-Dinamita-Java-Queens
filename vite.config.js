 import { main } from '@popperjs/core' 
import {resolve} from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main: resolve(__dirname, 'index.html'),
                acercaNosotros: resolve(__dirname,'acerca_de_nosotros.html'),
                compras: resolve(__dirname,'compras.html'),
                contactanos: resolve (__dirname,'contactanos.html'),
                datosEnvio: resolve (__dirname,'datos_de_envio.html'),
                formCreaObjetos: resolve (__dirname,'form_crea_objetos.html'),
                iniciarSesion: resolve(__dirname,'iniciar_sesion.html'),
		        /* inicio: resolve(__dirname,'Inicio.html'), */
		        Productos: resolve(__dirname,'Productos.html'),
		        quienesSomos: resolve(__dirname,'quienes_somos.html'),
                
            },
        },
    },
})