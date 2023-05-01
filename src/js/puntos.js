// Selección del contenedor de puntos
const puntosContainer = document.querySelector('.puntos-container');

// Función para generar un número aleatorio entre min y max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array con la ruta de las imágenes
const imagenes = [
  '../build/img/html5.png',
  '../build/img/css.png',
  '../build/img/js.png',
  '../build/img/sass.png',
  '../build/img/gulp.png',
  '../build/img/bootstrap.png',
  
];

// Creación de 100 puntos con imágenes aleatorias
for (let i = 0; i < 30; i++) {
  // Creación de cada punto y asignación de clase
  const punto = document.createElement('div');
  punto.classList.add('punto');

  // Selección aleatoria de una imagen
  const imagen = imagenes[getRandomNumber(0, imagenes.length - 1)];

  // Generación de estilo aleatorio
  const left = getRandomNumber(0, 100);
  const top = getRandomNumber(0, 100);
  const scale = getRandomNumber(3, 8) / 10;

  // Aplicación de estilo al punto
  punto.style.left = `${left}%`;
  punto.style.top = `${top}%`;
  punto.style.transform = `translate(-50%, -50%) scale(${scale})`;
  punto.style.setProperty('--x', `${getRandomNumber(-1200, 1150)}px`);
  punto.style.setProperty('--y', `${getRandomNumber(-1150,1200)}px`);
  punto.style.backgroundImage = `url(${imagen})`;
  punto.style.backgroundSize = 'cover';
  punto.style.backgroundRepeat = 'no-repeat';
  punto.style.backgroundPosition = 'center';

  // Añadir el punto al contenedor
  puntosContainer.appendChild(punto);
}
