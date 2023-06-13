// Obtén los contenedores de imágenes
const infoContainers = document.querySelectorAll('.info-container');

// Establece el intervalo de tiempo (en milisegundos) para cambiar las imágenes
const intervalTime = 3000; // Cambia cada 3 segundos

// Función para cambiar la imagen
function changeImage() {
  infoContainers.forEach(infoContainer => {
    const images = infoContainer.querySelectorAll('img');
    // Verificar si hay imágenes antes de continuar
    if (images.length > 0) {
      // Ocultar la imagen actual
      images.forEach(image => {
        image.style.opacity = '0';
      });
      // Incrementar el índice de la imagen actual
      infoContainer.currentIndex = (infoContainer.currentIndex + 1) % images.length;
      // Mostrar la nueva imagen
      images[infoContainer.currentIndex].style.opacity = '1';
    }
  });
}

// Inicia el carrusel para cada contenedor de imágenes
infoContainers.forEach(infoContainer => {
  infoContainer.currentIndex = 0; // Establece el índice de la imagen actual
});

// Inicia el carrusel
const intervalId = setInterval(changeImage, intervalTime);



