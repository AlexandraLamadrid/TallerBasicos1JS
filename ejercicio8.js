const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertirMoneda(monto, monedaDestino) {
  let tasaCambio;

  if (monedaDestino === "USD") {
    tasaCambio = 0.00026;
  } else if (monedaDestino === "EUR") {
    tasaCambio = 0.00024;
  } else {
    console.log("Moneda no válida. Usa 'USD' o 'EUR'.");
    rl.close();
    return;
  }

  let resultado = monto * tasaCambio;
  console.log(`${monto} COP equivalen a ${resultado.toFixed(2)} ${monedaDestino}`);
  rl.close();
}

// Pedir monto y moneda
rl.question("Ingresa el monto en COP: ", (montoInput) => {
  rl.question("¿A qué moneda deseas convertir? (USD o EUR): ", (monedaInput) => {
    let monto = Number(montoInput);
    let moneda = monedaInput.toUpperCase();
    convertirMoneda(monto, moneda);
  });
});
