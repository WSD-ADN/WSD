
document.addEventListener("DOMContentLoaded", () => {
    //  click del botón
    const $boton = document.querySelector("#btnCrearPdf");
    if ($boton) {
      $boton.addEventListener("click", () => {
        const cv = document.getElementById("cv-pdf");
  
        const $elementToConvert = cv; //Elemento del DOM
      html2pdf()
        .set({
          margin: 1,
          filename: "Juan-Carlo-CV.pdf",
          image: {
            type: "jpeg",
            quality: 0.98,
          },
          html2canvas: {
            scale: 3, // A mayor escala, mejores gráficos, pero más peso
            letterRendering: true,
          },
          jsPDF: {
            unit: "in",
            format: "a3",
            orientation: "portrait", // landscape o portrait
          },
        })
        .from($elementToConvert)
        .save()
        .catch((err) => console.error(err));
      });
    }
  });

  const year = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  year.textContent = currentYear;

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.target === document.documentElement) {
        const windowWidth = window.innerWidth;
        if (windowWidth < 1023) {
          // Cambiar el estilo cuando el ancho de la ventana es menor que 1023
          changeParagraph();
        } else {
          // Revertir el estilo cuando el ancho de la ventana es mayor o igual a 1023
          revertParagraph();
        }
      }
    });
  };
  