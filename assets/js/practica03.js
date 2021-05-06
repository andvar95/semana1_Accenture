/**
 * Ejercicio 9
 * Dia de la semana
 */

let día = prompt("Ingresa día de la semana")

if(!día){
    dia = día.toLowerCase()
    if (día == "sabado" || día == "domingo") {
        console.log("Fin de semana");
    } else {
    if (
        día == "lunes" ||
        día == "martes" ||
        día == "jueves" ||
        día == "viernes" ||
        día == "miercoles"
        ) {
        console.log("Día de semana");
    } else {
        console.log("Ingrese un día correcto");}}
}
else{
    console.log("Ingrese un día valido");
}


switch (día) {
    case null:
        console.log("Ingrese un día a l semana")
        break;
    case "sabado":
    case "domingo":
        console.log("Es fin de semana")
    default:
        break;
}
