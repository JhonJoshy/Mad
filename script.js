const FECHA_CORRECTA = "2507"; 
let intentoActual = ""; 
function agregarNumero(numero) {
    
    if (intentoActual.length >= 4) return;
    intentoActual += numero;
    actualizarPantalla();
    
    if (intentoActual.length === 4) {
        setTimeout(() => {
            if (intentoActual === FECHA_CORRECTA) {
                alert("¡Felicidades, fecha correcta!");
            } else {
                alert("Inténtalo de nuevo ");
                intentoActual = "";
                actualizarPantalla();
            }
        }, 300);
    }
}

function actualizarPantalla() {
    const digitos = document.querySelectorAll('.digito');
    for (let i = 0; i < 4; i++) {
        if (i < intentoActual.length) {
            digitos[i].innerText = intentoActual[i];
        } else {
            digitos[i].innerText = "_";
        }
    }
}

//Que rollo con el pollo