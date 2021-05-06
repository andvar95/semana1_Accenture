let btnPrueba = document.getElementById('btnPrueba');
let tituloPagina = document.getElementById('tituloPagina'); 

const mensajeAlerta = () =>{
    console.log("Prueba")
};



//OnClicks
btnPrueba.onclick = () => {
    mensajeAlerta();
};

tituloPagina.onclick = () => {
    mensajeAlerta();
};