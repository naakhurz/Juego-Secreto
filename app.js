let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarElementoTexto("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarElementoTexto("p", "El numero secreto es menor")
        } else {
            asignarElementoTexto("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}


function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(numeroMaximo);

    if(listaNumeroSorteado.length == numeroMaximo) {
        asignarElementoTexto("p", "Ya se han sorteado todos los numeros posibles")
    }else{

        if(listaNumeroSorteado.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return(numeroGenerado);
        }
    }
}

function condicionesIniciales() {
    asignarElementoTexto("h1", "Juego del numero secreto");
    asignarElementoTexto("p", `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Iniciar los mensajes
    condicionesIniciales();
    //Generar numero aleatorios
    //Inicializar numero de intentos
    //Deshabilitar boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();