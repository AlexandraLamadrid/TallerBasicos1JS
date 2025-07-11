// - Red social.
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
// cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
// cumplen con tener más de 18.

const prompt = require("prompt-sync")();

let user = [
    {nombre: 'Alexandra', edad: 27, correo: 'Alexandra@Lamadrid.com'},
    {nombre: 'Johann', edad: 30, correo: 'Johann@Ricaurte.com'},
    {nombre: 'Daniel', edad: 16, correo: 'Daniel@Zamora.com'},
    {nombre: 'Johana', edad: 22, correo: 'Johana@Usaquen.com'},
]

function filtrarUsuarios(user, edadMinima){
    let resultado = [];

    for(i=0; i< user.length; i++){
        if(user[i].edad >= edadMinima){
            resultado.push(user[i])
        }
    }

    return resultado;

}

let edadMinima = 18;

let userFiltrados = filtrarUsuarios(user, edadMinima);

console.log('Usuarios con edad minima: ', userFiltrados);

