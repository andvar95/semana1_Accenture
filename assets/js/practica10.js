// ciclo for
let btnPrueba = document.getElementById('btnPrueba');


const spamLink = () =>{

for (let i = 0; i < 5; i++) {
    window.open('https://es.wikipedia.org/wiki/Especial:Estad%C3%ADsticas');
    
}

}

//Se debe usar cuando se un evento distintos al onclick ya que este ejecuta otro evtListener
//No sirve en todos los navegadores el onclick si IE,navagadores raros
btnPrueba.addEventListener('click',()=>{
    spamLink()
})
