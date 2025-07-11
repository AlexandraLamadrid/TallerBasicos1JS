function convertirMoneda(monto, monedaDestino) {
    let tasaCambio;

    if (monedaDestino === 'USD') {
        tasaCambio = 0.00026;
    } else if (monedaDestino === 'EUR') {
        tasaCambio = 0.00024;
    } else {
        console.log("Moneda no valida");
        return;
    }

    let resultado = monto * tasaCambio
    console.log(`${monto} COP equivalen a ${resultado.toFixed(2)} ${monedaDestino}`);
}

let montoCOP = Number(prompt("Ingresa el monto en pesos colombianos (COP):"));
let moneda = prompt("¿A qué moneda deseas convertir? (USD o EUR)").toUpperCase();

convertirMoneda(montoCOP, moneda);