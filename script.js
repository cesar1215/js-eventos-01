//Guarda en una variable llamada "evento" el elemento con clase "evento"
const evento = document.querySelector('.evento');

//En evento con la propiedad addEventListenner utiliza el evento click para llamar una funcion interna
    //Dentro de la funcion escribe alert('Hola Mundo');
evento.addEventListener('click', function(){
    alert('Hola Mundo');
});
