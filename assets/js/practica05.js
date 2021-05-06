//operaciones 

const sumaDosNumeros = () =>{
    let num1 = prompt("Ingrese el número 1")
    let num2 = prompt("Ingrese el número 2")

    let resultado = parseFloat(num1)+parseFloat(num2)

    console.log(num1,num2)
    console.log(resultado)
};

const restaDosNúmeros = () =>{

    let num1 = prompt("Ingrese el número 1")
    let num2 = prompt("Ingrese el número 2")

    let resultado = parseFloat(num1)-parseFloat(num2)

    console.log(num1,num2)
    console.log(resultado)
}

const mulDosNúmeros = () =>{

    let num1 = prompt("Ingrese el número 1")
    let num2 = prompt("Ingrese el número 2")

    let resultado = parseFloat(num1)*parseFloat(num2)

    console.log(num1,num2)
    console.log(resultado)
}

const divDosNúmeros = () =>{

    let num1 = parseFloat(prompt("Ingrese el número 1"));
    let num2 = parseFloat(prompt("Ingrese el número 2"));


num2 == 0 ?  console.log("No sé puede dividir por cero"):console.log(num1/num2)

}
