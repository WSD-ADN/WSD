// Obtén todos los elementos .border-separar y .info-container
const borderSepararList = document.querySelectorAll('.border-separar');
const infoContainerList = document.querySelectorAll('.info-container');

// Recorre todos los elementos .border-separar
borderSepararList.forEach((borderSeparar, index) => {
    // Obtén el elemento .info-container correspondiente por índice
    const infoContainer = infoContainerList[index];

    // Oculta el .info-container al entrar en el .border-separar
    borderSeparar.addEventListener('mouseenter', function() {
        infoContainer.style.display = 'none';
    });

    // Muestra el .info-container al salir del .border-separar
    borderSeparar.addEventListener('mouseleave', function() {
        infoContainer.style.display = 'block';
    });
});
