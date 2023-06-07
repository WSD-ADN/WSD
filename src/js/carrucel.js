// Obtén el contenedor y las imágenes
const infoContainers = document.querySelectorAll('.info-container');

// Establece el índice de la imagen actual
let currentIndex = 0;
// Establece el intervalo de tiempo (en milisegundos) para cambiar las imágenes
const intervalTime = 3500; // Cambia cada 3 segundos

// ...
function changeImage() {
    infoContainers.forEach(infoContainer => {
      const images = infoContainer.getElementsByTagName('img');
  
      // Verificar si hay imágenes antes de continuar
      if (images.length > 0 && images[currentIndex]) {
        // Ocultar la imagen actual
        images[currentIndex].style.opacity = '0';
        // Incrementar el índice de la imagen actual
        currentIndex = (currentIndex + 1) % images.length;
        // Mostrar la nueva imagen
        images[currentIndex].style.opacity = '1';
      }
    });
  }
  
// Función para cambiar la imagen


// Inicia el carrusel
const intervalId = setInterval(changeImage, intervalTime);


