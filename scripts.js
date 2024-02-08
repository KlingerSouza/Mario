const form = document.querySelector('.formulario-fale-conosco')
const mask = document.querySelector('.mascara-formulario')





function MostrarForm(){
    form.style.left= "50%" 
    form.style.transform = 'translateX(-50%)'
    mask.style.visibility = "visible"

}

function esconderForm(){
    form.style.left= "-300px"
    form.style.transform = 'translateX(0)'
    mask.style.visibility = "hidden"

}
function Alerta(){
    alert('você já está em casa!')
}


