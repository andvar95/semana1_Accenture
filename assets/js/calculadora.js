/**Calculadora JS */

//varibles h3
let msj = document.getElementById('msj')
let casilla = document.getElementById('casilla')
let historial = document.getElementById('historial')

//variables botones
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn0 = document.getElementById('btn0')


//operaciones
let btnSuma = document.getElementById('btnSuma')
let btnResta = document.getElementById('btnResta')
let btnMul = document.getElementById('btnMul')
let btnDiv = document.getElementById('btnDiv')
let btnIgual = document.getElementById('btnIgual')
let btnClear = document.getElementById('btnClear')
let btnC = document.getElementById('btnCE')
let btnPunto = document.getElementById('btnPunto')

//temp
let num1Temp ="";
let num2Temp ="";
let opTemp ="";
let historialTemp = "";

//funciones
const btn1f = () =>{
    if (opTemp==="") {
        num1Temp += "1"
        casilla.innerHTML = num1Temp 
       // historialTemp = num1Temp
       // historial.innerHTML = historialTemp
    } else {
        if(num1Temp !== ""){
        num2Temp += "1"
        casilla.innerHTML =num2Temp 
    }} 
};

const btn2f = () =>{
    if (opTemp==="") {
        num1Temp += "2"
        casilla.innerHTML = num1Temp 
    } else {
        if(num1Temp !== ""){
            num2Temp += "2"
            casilla.innerHTML =num2Temp 
        }    
    } 
}

const btn3f = () =>{
    if (opTemp==="") {
        num1Temp += "3"
        casilla.innerHTML = num1Temp 
    } else {
        if(num1Temp !== ""){
            num2Temp += "3"
            casilla.innerHTML =num2Temp 
        }     
    } 
}

const btn4f = () =>{
    limpiarMensaje()
    if (opTemp==="") {
        num1Temp += "4"
        casilla.innerHTML = num1Temp 
    } else {
        if(num1Temp !== ""){
            num2Temp += "4"
            casilla.innerHTML =num2Temp 
        }    
    } 
}

const btn5f = () =>{
    if (opTemp==="") {
        num1Temp += "5"
        casilla.innerHTML = num1Temp 
    } else {
        if(num1Temp !== ""){
            num2Temp += "5"
            casilla.innerHTML =num2Temp 
        }    
    } 
}

const btn6f = () =>{
    if (opTemp==="") {
        num1Temp += "6"
        casilla.innerHTML = num1Temp 
    } else {
        if(num1Temp !== ""){
            num2Temp += "6"
            casilla.innerHTML =num2Temp 
        }     
    } 
}
const btn7f = () =>{
    if (opTemp==="") {
        num1Temp += "7"
        casilla.innerHTML = num1Temp 
    } else {
        if(num1Temp !== ""){
            num2Temp += "7"
            casilla.innerHTML =num2Temp 
        }    
    } 
}

const btn8f = () =>{
    if (opTemp==="") {
        num1Temp += "8"
        casilla.innerHTML = num1Temp 
    } else {
        if(num1Temp !== ""){
            num2Temp += "8"
            casilla.innerHTML =num2Temp 
        }     
    } 
}

const btn9f = () =>{
    if (opTemp==="") {
        num1Temp += "9"
        casilla.innerHTML = num1Temp 
    } else {
        num2Temp += "9"
        casilla.innerHTML =num2Temp   
    } 
}

const btn0f = () =>{
    if (opTemp==="") {
        num1Temp += "0"
        casilla.innerHTML = num1Temp 
    } else {
        if(num1Temp !== ""){
            num2Temp += "0"
            casilla.innerHTML =num2Temp 
        }    
    } 
}

const btnSumaf = () =>{
    
    if (num1Temp != "") {
        casilla.innerHTML = "" 
        opTemp= "+"
        historialTemp = num1Temp+"+"
        historial.innerHTML = historialTemp    
    }
    else{
        msj.innerHTML ="digite un primer número";
        limpiarMensaje()
    } 
}

const btnRestaf = () =>{
    
    if (num1Temp != "") { 
        opTemp= "-"    
    } 
}

const btnMulf = () =>{
    if (num1Temp != "") { 
        opTemp= "*"    
    } 
}

const btnDivf = () =>{
    if (num1Temp != "") { 
        opTemp= "/"    
    } 
}
const btnIgualf = () =>{
    if (num2Temp === "") {
        msj.innerHTML ="No hay digitos par asumar"
        limpiarMensaje();
    } else {
        let numero1 = parseFloat(num1Temp);
        let numero2 = parseFloat(num2Temp);
        let resultado = 0

        switch (opTemp) {
            case "+":
                resultado = numero1+numero2
                break;
            case "-":
                resultado = numero1-numero2
                break;
            case "*":
                resultado = numero1*numero2
                break;
            case "/":
                if (numero2 === 0){
                return msj.innerHTML ="No se puede dividir entre 0";
                }
                else{
                    resultado = numero1/numero2
                }
                break;
            default:
                break;
        }
        casilla.innerHTML = resultado
        historial.innerHTML = resultado
    }
};

const limpiarMensaje = () =>{
    setTimeout(() => {
        msj.innerHTML = ""
    },2000)
    
}

const btnClearf = () =>{
    casilla.innerHTML = "";
    num1Temp="";
    num2Temp="";
    opTemp = "";
    historial.innerHTML = "";
    historialTemp  ="";
}

const btnPuntof = () =>{
    if (num1Temp.includes('.') && opTemp===""){
        msj.innerHTML = "Ya existe un punto en el operador 1"
        limpiarMensaje()
    } 
    else {
        if(opTemp === "" && num1Temp ==""){
            num1Temp += "0.";
            casilla.innerHTML = num1Temp;
        }
        else{
            if (opTemp === "") {
            num1Temp += ".";
            casilla.innerHTML = num1Temp;}
            else {
            if(num2Temp.includes('.') && opTemp!==""){
                msj.innerHTML = "Ya existe un punto en el operador 2"
                limpiarMensaje()
            }
            else{
                if(num2Temp ===""){
                    num2Temp += "0.";
                    casilla.innerHTML = num2Temp;
                }
                else{
                    num2Temp += ".";
                    casilla.innerHTML = num2Temp;
                }
            }
        }   
    }
}
}
const btnCEf = () =>{
    if(num1Temp ===""){
        msj.innerHTML = "No hay números que borrar"
        limpiarMensaje()
    }else{
        if (opTemp === "") {
            num1Temp = num1Temp.substring(0,num1Temp.length-1)
            casilla.innerHTML = num1Temp
        } 
        else {
            if(num2Temp === ""){
                msj.innerHTML = "No hay números que borrar"
                limpiarMensaje()
            }
            else{
            num2Temp = num2Temp.substring(0,num2Temp.length-1)
            casilla.innerHTML = num2Temp
            }
        }
    }
};

//onclick 
btn1.onclick = () =>{
    btn1f();
};
btn2.onclick = () =>{
    btn2f();
};
btn3.onclick = () =>{
    btn3f();
};
btn4.onclick = () =>{
    btn4f();
};
btn5.onclick = () =>{
    btn5f()
};
btn6.onclick = () =>{
    btn6f()
};
btn7.onclick = () =>{
    btn7f()
};
btn8.onclick = () =>{
    btn8f()
};
btn9.onclick = () =>{
    btn9f()
};
btn0.onclick = () =>{
    btn0f()
};
btnSuma.onclick = () =>{
    btnSumaf()
};
btnResta.onclick = () =>{
    btnRestaf()
};
btnMul.onclick = () =>{
    btnMulf()
};
btnDiv.onclick = () =>{
    btnDivf()
};
btnIgual.onclick = () =>{
    btnIgualf()
};
btnClear.onclick = () =>{
    btnClearf()
};
btnCE.onclick = () =>{
    btnCEf()
};
btnPunto.onclick = () =>{
    btnPuntof()
};







