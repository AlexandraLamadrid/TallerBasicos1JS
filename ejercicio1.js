//Crear calculadora de propinas

const readline = require('readline');

//función para calcular la propina

function calcularPropina(total, porcentaje)
{
  return total * (porcentaje/100);
}

console.log("Calculadora de propinas"); 

//Solicitar al usuario el total de la cuenta y el porcentaje de propina
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
rl.question("Ingrese el total de la cuenta: ", (totalCuenta) => {
    rl.question("Ingrese el porcentaje de propina: ", (porcentajePropina) => {
        let total = calcularPropina(parseFloat(totalCuenta), parseFloat(porcentajePropina));
        console.log("La propina es: " + total.toFixed(2));
        rl.close();
    });

    });