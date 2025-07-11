//Crear funcion coontador de palabras

const readline = require('readline');

// Función para contar palabras
function contarPalabras(texto) {
  if (texto == null || texto.trim() === "") {
    return 0;
  }
  return texto.trim().split(/\s+/).length;
}

console.log("Contador de palabras");
// Solicitar al usuario el texto a contar
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el texto a contar: ", (texto) => {
  let cantidadPalabras = contarPalabras(texto);
  console.log("La cantidad de palabras es: " + cantidadPalabras);
  rl.close();
});