/**
 * Condicional if - else
 */

let name = prompt('Ingresa tu nombre')
let age = prompt("Ingrsa tu edad")

if(age>=18){
    console.log("Puedes Ver Peliculas Violentas")
}
else{
    console.log("No puedes Ver Peliculas Violentas")
}

/**SWTICH-CASE */

switch (edad) {
    case "18":
        console.log("Puedes Ver Peliculas Violentas")
        break;
    default:
        console.log("No puedes Ver Peliculas Violentas")
        break;
}