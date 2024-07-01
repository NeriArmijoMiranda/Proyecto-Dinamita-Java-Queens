console.log("Espero por todos los Dioses que te logres conectar");

/*Vamos a crear variables que validen en consola lo que el formulario está haciendo, estas se encuentran en el HTML 
con su respectivo "id="*/


/Declarar las variables globalmente/

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

/*<script>
	// <![CDATA[  <-- For SVG support 
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>*/







