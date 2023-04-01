// Typing //

const typingElement = document.querySelector(".typing");
const textList = ["diseñador web", "desarrollador web"];
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
            //  allSection[x].classList.add('back-section');
            }
            navList[x].querySelector('a').classList.remove('active');
          }
          this.classList.add('active');
          showSection(this);
          // if(window.innerWidth < 1200){
          //   asideSectionTogglerBtn();
          // }
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
// navegar con el btn de contactar //--------------------------------

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
//----------------------------------------

//----------------------------------------
