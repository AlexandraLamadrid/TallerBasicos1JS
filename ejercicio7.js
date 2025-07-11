const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function retirarDinero(saldo, monto) {
  if (monto <= saldo) {
    let nuevoSaldo = saldo - monto;
    console.log(`Retiro exitoso. Tu nuevo saldo es: $${nuevoSaldo}`);
  } else {
    console.log("Fondos insuficientes.");
  }
}

rl.question("Ingresa tu saldo actual: ", (saldoInput) => {
  rl.question("¿Cuánto deseas retirar?: ", (montoInput) => {
    let saldo = Number(saldoInput);
    let monto = Number(montoInput);
    retirarDinero(saldo, monto);
    rl.close();
  });
});
