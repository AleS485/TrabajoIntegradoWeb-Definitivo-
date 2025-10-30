
const imagenCargar = document.getElementById("imagen-principal");
const srcDeImagenes = ["img/carrusel1.jpg", "img/carrusel2.jpg", "img/carrusel3.png"];

let posicionDeLaImagen = 0;


function siguienteImagen(){

    posicionDeLaImagen++;

    if(posicionDeLaImagen > srcDeImagenes.length - 1){

        posicionDeLaImagen = 0;

    }

    imagenCargar.src = srcDeImagenes[posicionDeLaImagen];

}


function anteriorImagen(){

    posicionDeLaImagen--;

    if(posicionDeLaImagen < 0){

        posicionDeLaImagen = srcDeImagenes.length - 1;

    }

    imagenCargar.src = srcDeImagenes[posicionDeLaImagen];

}



