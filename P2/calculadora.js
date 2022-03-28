/*funcionamiento de la calculadora*/

display = document.getElementById("display");
igual = document.getElementById("igual");
clear = document.getElementById("clear");
coma = document.getElementById("coma");
del = document.getElementById("del");

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
    COMA: false,
}

 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado inicial
let estado = ESTADO.INIT;
let estado_log = []; //variable estados anteriores

let numeros = document.getElementsByClassName('numero');
for(i=0; i<numeros.length; i++) {
    numeros[i].onclick = (ev) => {
        digito(ev.target.value);
    }
}

let calculos = document.getElementsByClassName('operacion')
for(i=0; i<calculos.length; i++) {
    calculos[i].onclick = (ev) => {
        if(estado == ESTADO.OP1){
            display.innerHTML += ev.target.value;
            estado_log.push(estado);
            estado = ESTADO.OPERATION;
            console.log(estado, "opera");
        }
    }
}

function digito(boton)
{
    if(estado == ESTADO.INIT) {
        display.innerHTML = boton;
        estado_log.push(estado);
        estado = ESTADO.OP1;
        console.log(estado, "digito");
    }else if (estado == ESTADO.OP1 || estado == ESTADO.OP2 || estado == ESTADO.OPERATION) {
        display.innerHTML += boton;
        console.log(estado, "digito");
        estado_log.push(estado);
    if (estado == ESTADO.OPERATION) {
        estado = ESTADO.OP2;
        console.log(estado);
        }
    }
}

//-- Evaluar la expresion
igual.onclick = () => {
    console.log(estado);
    if(estado == ESTADO.OP2){
        display.innerHTML = eval(display.innerHTML);
        estado = ESTADO.OP1;
        ESTADO.COMA = false;
        console.log(estado,"igual");
        estado_log = [];
    }
}

//-- Poner a cero
clear.onclick = (ev) => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  ESTADO.COMA = false;
  console.log(estado,"clear");
  estado_log = [];
}

//-- Poner coma
coma.onclick = (ev) => {
    if (ESTADO.COMA){
        console.log("NO puede introducir dos comas");
    } else {
        display.innerHTML += ev.target.value;
        ESTADO.COMA = true;
        estado_log.push(estado);
    }
}

//-- Eliminar el último dígito CLEAR
del.onclick = () => {
    display.innerHTML = display.innerHTML.slice(0,-1);
    if(estado_log.length>1){
        estado = estado_log.pop();
    }
}