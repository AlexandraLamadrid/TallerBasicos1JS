/*EJERCICIOS 2*/
const prompt = require("prompt-sync")();

//Formulario de registro
let usuario = {}
function Formulario(){
    console.log("FORMULARIO DE REGISTRO");    
    let user = String(prompt("Ingrese el usuario a registrar: "));
    usuario.userName = user;
    console.log("La contraseña debe contener:\n1. Al menos 8 caracteres\n2. Incluye 1 numero\n3. Incluye una mayuscula");
    let pass = String(prompt("Ingrese la contraseña de usuario: "));    
    usuario.pass = pass;
}

//Ingreso y validacion de contraseña
function validacion(){    
    let pass = prompt("Ingrese su contraseña: ");
    if (pass == usuario.pass){
        console.log("CONTRASEÑA CONRRECTA");
    }
    else{
        console.log("CONTRASEÑA INCORRECTA");
        console.log("Por favor vuelva a intentar.");
        validacion();
    }
}

function main(){
    Formulario();    
    validacion();
}

main();
