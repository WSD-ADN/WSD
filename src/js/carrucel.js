// Obtén el contenedor y las imágenes
const infoContainer = document.getElementById('infoContainer');
const images = infoContainer.getElementsByTagName('img');
// Establece el índice de la imagen actual
let currentIndex = 0;
// Establece el intervalo de tiempo (en milisegundos) para cambiar las imágenes
const intervalTime = 3500; // Cambia cada 3 segundos

// Función para cambiar la imagen
function changeImage() {
    // Oculta la imagen actual
    images[currentIndex].style.opacity = '0';
    // Incrementa el índice de la imagen actual
    currentIndex = (currentIndex + 1) % images.length;
    // Muestra la nueva imagen
    images[currentIndex].style.opacity = '1';
}

// Inicia el carrusel
const intervalId = setInterval(changeImage, intervalTime);


