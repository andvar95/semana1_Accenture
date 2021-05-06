/**
 * Functions
 */


// function Prueba1(){
//     console.log("Prueba1")
//     //Prueba2();
// }

// const Prueba2 = () =>{
//     console.log("Prueba 2")
//     //Prueba1();
// }


/**Suma de dos números */
//String tiene la prioridad
//¿Como se suma?
//
const sumaDosNumeros = () =>{
    let num1 = prompt("Ingrese el número 1")
    let num2 = prompt("Ingrese el número 2")

    let resultado = parseFloat(num1)+parseFloat(num2)

    console.log(num1,num2)
    console.log(resultado)
}