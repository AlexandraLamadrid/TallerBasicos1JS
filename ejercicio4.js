// - Plataforma educativa.
// Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario
// (separadas por comas) y retorne el promedio (redondeado a 2 decimales)


const prompt = require("prompt-sync")();

console.log("Vamos a calcular el promedio de tres notas:");

let nota1 = parseFloat(prompt("Ingresa la primera nota: "));
let nota2 = parseFloat(prompt("Ingresa la segunda nota: "));
let nota3 = parseFloat(prompt("Ingresa la tercera nota: "));

//* Aqui guardo las notas en un array
let listaNotas = [nota1, nota2, nota3];

//* Hago la funcion para sacar el promedio 
function calcularPromedio(notas) {
  let suma = notas[0] + notas[1] + notas[2];
  let promedio = suma / 3;
  return promedio.toFixed(2);
}

let promedioFinal = calcularPromedio(listaNotas);

console.log("Tus notas son:", listaNotas);
console.log("El promedio de las notas es:", promedioFinal);
