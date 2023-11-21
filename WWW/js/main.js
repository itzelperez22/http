console.log("Hola JavaScript del lado del cliente");
let button = document.getElementById('boton-ocultar');
function hideImage(){
    let image = document.getElementById('imgmishi');
    image.style = 'display:none';
}
button.onclick = hideImage;