let btnPrueba = document.getElementById('btnPrueba');
let nombre = document.getElementById('nombre')


//interHTML-> Sobrescribe el contenido
//function normal declarada 
const registraNombre = () =>{
    let nombre = prompt("Ingresa tu nombre");
    this.nombre.innerHTML = "Nombre: "+nombre;
};




///onclcks 
btnPrueba.onclick = () =>{
    registraNombre();
};