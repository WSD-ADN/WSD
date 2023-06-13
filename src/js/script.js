// Typing //

const typingElement = document.querySelector(".typing");
const textList = ["Diseñador web", "Desarrollador de Software"];
let index = 0;
let letterIndex = 0;
let isDeleting = false;
let text = "";

typingElement.classList.add("show-caret");

function type() {
  text = textList[index].substring(0, letterIndex + 1);
  typingElement.textContent = text;
  if (letterIndex === textList[index].length - 1) {
    isDeleting = true;
    typingElement.classList.remove("show-caret");
  } else if (letterIndex === 0 && isDeleting) {
    isDeleting = false;
    index = (index + 1) % textList.length;
    typingElement.classList.add("show-caret");
  }
  letterIndex += isDeleting ? -1 : 1;
  setTimeout(type, isDeleting ? 50 : 150);
}

type();


//--------------------------------


//------------- Navegacion -------------------


 const nav = document.querySelector('.nav'),
       navList = nav.querySelectorAll('li'),
       totalNavList = navList.length,
       allSection = document.querySelectorAll('.section'),
       totalSection = allSection.length;
       for(let i=0; i<totalNavList; i++){
         const a = navList[i].querySelector('a');
         a.addEventListener('click', function(){

          
           removeBackSection();
           for(let x=0 ; x<totalNavList; x++){
             if(navList[x].querySelector('a').classList.contains('active')){
               addBackSection(x);
               allSection[x].classList.add('back-section');
             }
             navList[x].querySelector('a').classList.remove('active');
           }
           this.classList.add('active');
           showSection(this);
            if(window.innerWidth < 1200){
              asideSectionTogglerBtn();
            }
         });
       }

       function removeBackSection(){
           for(let i = 0; i<totalSection; i++){
               allSection[i].classList.remove('back-section');
           }
       }
       function addBackSection(num){
         allSection[num].classList.add('back-section');
       }
       function showSection(element){
         for(let i = 0; i<totalSection; i++){
           allSection[i].classList.remove('active');
         }
         const target = element.getAttribute('href').split('#')[1];
         document.querySelector('#' + target).classList.add('active');
        
       }
// // navegar con el btn de contactar //--------------------------------

       function updateNav(element){
         for(i= 0; i<totalNavList; i++){
           navList[i].querySelector('a').classList.remove('active');
           const target = element.getAttribute('href').split('#')[1];
           if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
             navList[i].querySelector('a').classList.add('active');
           }
         }
       }

       document.querySelector('.hire-me').addEventListener('click', function(){
         const sectionIndex = this.getAttribute('data-section-index');
         showSection(this);
         updateNav(this);
         removeBackSection();
         addBackSection(sectionIndex);
       })
 //-------------------------------------------------------------------
const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside'),
      section = document.querySelectorAll('.section');
      navTogglerBtn.addEventListener('click', () =>{
        asideSectionTogglerBtn();
      });

      function asideSectionTogglerBtn() {
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
        for (let i = 0; i < section.length; i++) {
          section[i].classList.toggle('open');
        }
      }

      document.addEventListener('click', function (event) {
       const targetElement = event.target;
       const windowWidth = window.innerWidth;
     
       // Verificar si el ancho de la ventana es mayor o igual a 768px
       if (windowWidth < 768 && !aside.contains(targetElement) && !nav.contains(targetElement)) {
         aside.classList.remove('open');
         navTogglerBtn.classList.remove('open');
         for (let i = 0; i < section.length; i++) {
           section[i].classList.remove('open');
         }
       }
     });
 //----------------------------------------

 //----------------------------------------
 //--- Color barra --------------//
 // Obtén la referencia al elemento aside

 const miAside = document.getElementById('miAside');

// Añade un event listener para el evento de hashchange (cambio en el fragmento de URL)
 window.addEventListener('hashchange', function() {
     // Obtén el fragmento de URL actual
     let hash = window.location.hash;

    // Restaura el estilo por defecto
     miAside.style.backgroundColor = ''; // Establece el color de fondo a vacío para restaurar el estilo por defecto
     miAside.style.backgroundImage = 'none'; // Establece la imagen de fondo a none para restaurar el estilo por defecto
     miAside.style.borderRight = ''; // Establece el borde derecho a vacío para restaurar el estilo por defecto
     miAside.style.transition = ''; // Restaura la transición a vacío para restaurar el estilo por defecto

    // Si el fragmento de URL es #portafolio, aplica el borde derecho y el color de fondo en el aside con una transición de 1 segundo
    if (hash === '#portafolio') {
        miAside.style.borderRight = 'thin solid rgb(255, 208, 0)'; // Aplica el borde derecho con el color rgb(255, 208, 0)
        miAside.style.backgroundColor = '#232734'; // Aplica el color de fondo #232734
        miAside.style.transition = 'all 1s ease'; // Aplica una transición de 1 segundo en todos los estilos
    }
    // Si el fragmento de URL es #about o #contact, cambia el color de fondo del aside con una transición de 1 segundo
    else if (hash === '#about' || hash === '#contact') {
        // Cambia el color de fondo a #232734 con una transición de 1 segundo
        miAside.style.backgroundColor = '#232734';
        miAside.style.transition = 'all 1.5s ease'; // Aplica una transición de 1 segundo en todos los estilos
    }
    // Para cualquier otro fragmento de URL, restaura el estilo por defecto
    else {
        miAside.style.backgroundColor = ''; // Restaura el color de fondo a vacío para restaurar el estilo por defecto
        miAside.style.borderRight = ''; // Restaura el borde derecho a vacío para restaurar el estilo por defecto
        miAside.style.transition = ''; // Restaura la transición a vacío para restaurar el estilo por defecto
    }
});



//../build/img/portafoliofondo.jpg

