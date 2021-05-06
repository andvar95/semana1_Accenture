/**Mini calculadora */
//JS void es -> ANY
//TS any directamente
const miniCalculadora = () =>{

    //OPCIONde menu 
    let op =prompt("Escriba opción correspondiente la Operación: \n A.Sumar \n B.Restar \n C.Multiplicar \n D.Dividir")

    console.log(op)

    if(op != null){
    op = op.toLowerCase()
    if (op != "a" && op !='b' && op !='c' && op !='d'){
        alert('Ingrese una opción válida')
    }
    else{
        let num1 = parseFloat(prompt("Ingresa el número 1"));
        let num2 = parseFloat(prompt("Ingresa el número 2"));
        let resultado = 0; //determinar el tipo 
        //== coincidencias, sin importar tipo de datos
        //=== tipos numérios
        //>= ya se sabe que es numero
        //!== diferentes
        if(op=='a')resultado = num1+num2;
        if(op=='b')resultado = num1-num2;
        if(op=='c')resultado = num1*num2;
        if(op=='d'){
            if(num2 === 0){
                return alert('No se puede dividir entre cero')
            }
            else{
                resultado = num1/num2;
            }
        }

        alert("El resultado es"+resultado)
    }
}else{
    alert("Debe ingresar una opción")
}

    // switch (op) {  
    //     case 'a':
    //         op = op.toLowerCase();
    //         break;
    //     case 'b':
    //         op = op.toLowerCase();
    //         break

    //     case 'c':
    //         op = op.toLowerCase();
    //         break

    //     case 'd':
    //         op = op.toLowerCase();
    //         break
    
    //     default:
    //         alert('Ingrese una opción válida')
    //         break;
    // }

};



const wiki = () =>{
    return confirm("¿Estas seguro que deseas Slair?")
}