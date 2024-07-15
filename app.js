///Funcion para asignar textos a elementos del html
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    }
    
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p","Inserte un numero del 1 al 10: ");

///////////////////////////////////////////////////////////



/////////////////////////////////////

let numerosSorteados = [];
let numeroSecreto = generarNumeroAleatorio();

console.log(`Numero secreto para ganar: ${numeroSecreto}`);

//funcion para generar el numero a adivinar:

function generarNumeroAleatorio() {
let num = Math.floor(Math.random()*10)+1;

console.log(num)
console.log(numerosSorteados);

if (numerosSorteados.includes(num)){
    console.log("El numero ha sido repetido!")
    return generarNumeroAleatorio();
} else {
    numerosSorteados.push(num);
    return num;
}

}
/////////////////////////////

//Funcion para verificar el acierto por parte del jugador:

function intentoUsuario() {
    let num = parseInt(document.getElementById("valor").value); 
    console.log(num);
 
    if (num == numeroSecreto){ //El usuario gano el juego!:
        asignarTextoElemento("p","Felicidades, haz acertado! ");
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (num < numeroSecreto){ //El usuario inserto un numero menor!
        asignarTextoElemento("p","El numero secreto es mayor!")
        limpiarInput("valor");
    } else if (num > numeroSecreto){ //El usuario ingreso un numero mayor!
        asignarTextoElemento("p","El numero secreto es menor!")
        limpiarInput("Valor");
    }

limpiarInput("valor");

} 
//////////////////////////////////////

//Funcion para limpiar textos especificos en inputs:

function limpiarInput(){

let texto = document.getElementById("valor");
texto.value = "";

}
//////////////////////////////////////


//Funcion para reiniciar el juego
function reiniciarJuego() {
    
//Textos:
limpiarInput();
asignarTextoElemento("p","Ingrese un numero del 1 al 10: ");


//Numero aleatorio
numeroSecreto = generarNumeroAleatorio();
console.log(`Nuevo numero secreto: ${numeroSecreto}`);

//Deshabilitar boton:
document.querySelector("#reiniciar").setAttribute("disabled","true");

}
//////////////////////////////////////
