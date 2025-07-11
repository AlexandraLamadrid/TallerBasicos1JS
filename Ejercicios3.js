/*EJERCICIO 3*/
const prompt = require("prompt-sync")();

const inventario = [
    {nombre:"Chaqueta Chevignon", precio:200000},
    {nombre:"Chaqueta Luis Vouton", precio:500000}
]

function buscarProducto(){
    let nombreBuscar = String(prompt("Ingrese el nombre del producto a buscar: "));
    let d = false;
    for(i=0; inventario.length; i++){
        if (inventario[i].nombre.includes(nombreBuscar)){
            console.log("Producto encontrado: ", inventario[i].nombre, " con precio: ", inventario[i].precio);
            d = true
            break;
        }        
    }
    if(d !== true){
        console.log("PRODUCTO NO ENCONTRADO EN INVENTARIO");
    }
}

buscarProducto();