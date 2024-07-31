/* import { main } from '@popperjs/core' */
import {resolve} from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main: resolve(__dirname, 'index.html'),
                acercaNosotros: resolve(__dirname,'src/pages/acerca_de_nosotros/acerca_de_nosotros.html'),
                compras: resolve(__dirname,'src/pages/compras/compras.html'),
                contactanos: resolve (__dirname,'src/pages/contactanos/contactanos.html'),
                datosEnvio: resolve (__dirname,'src/pages/datos_de_envio/datos_de_envio.html'),
                formCreaObjetos: resolve (__dirname,'src/pages/Form_crea_objetos/form_crea_objetos.html'),
                iniciarSesion: resolve(__dirname,'src/pages/iniciar_sesion/iniciar_sesion.html'),
		        Productos: resolve(__dirname,'src/pages/Productos/Productos.html'),
		        quienesSomos: resolve(__dirname,'src/pages/quienes_somos/quienes_somos.html'),
                producto1: resolve(__dirname, 'src/pages/detalle_producto/1.html'),
                producto2: resolve(__dirname, 'src/pages/detalle_producto/2.html'),
                producto3: resolve(__dirname, 'src/pages/detalle_producto/3.html'),
                producto4: resolve(__dirname, 'src/pages/detalle_producto/4.html'),
                producto5: resolve(__dirname, 'src/pages/detalle_producto/5.html'),
                producto6: resolve(__dirname, 'src/pages/detalle_producto/6.html'),
                producto7: resolve(__dirname, 'src/pages/detalle_producto/7.html'),
                producto8: resolve(__dirname, 'src/pages/detalle_producto/8.html'),
                producto9: resolve(__dirname, 'src/pages/detalle_producto/9.html'),
                producto10: resolve(__dirname, 'src/pages/detalle_producto/10.html'),
                producto11: resolve(__dirname, 'src/pages/detalle_producto/11.html'),
                producto12: resolve(__dirname, 'src/pages/detalle_producto/12.html'),
                
            },
        },
    },
})
