import { main } from '@popperjs/core'
import {resolve} from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main: resolve(__dirname, 'index.html'),
                quienesSomos: resolve(__dirname,'¿Quienes-somos.html'),
                acercaNosotros: resolve(__dirname,'Acerca-de-nostros.html'),
                compras: resolve(__dirname,'Compras.html'),
                contactanos: resolve (__dirname,'contáctanos.html'),
                datosEnvio: resolve (__dirname,'Datos-de-Envío.html'),
                iniciarSesion: resolve(__dirname,'Iniciar-Sesión.html')
                
            }
        }
    }
})