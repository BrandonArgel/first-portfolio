// Texto Animado

class TextoAnimado {
    constructor(id, objetivo) {
      this.texto = document.getElementById(id);
      this.objetivo = document.getElementById(objetivo);
      this.letras = this.texto.innerText.split("");
  
      this.texto.innerText = "";
  
      this.letras.forEach((letra) => {
        let caracter = letra === " " ? "&nbsp;" : letra;
  
        this.texto.innerHTML =
          this.texto.innerHTML +
          `
                  <div>
                      <span>${caracter}</span>
                      <span class="segunda-linea">${caracter}</span>
                  </div>
              `;
      });
  
      this.objetivo.addEventListener("mouseenter", () => {
        let cuenta = 0;
  
        const intervalo = setInterval(() => {
          if (cuenta < this.texto.children.length) {
            this.texto.children[cuenta].classList.add("animacion");
            cuenta += 1;
          } else {
            clearInterval(intervalo);
          }
        }, 20);
      });
  
      this.objetivo.addEventListener("mouseleave", () => {
        let cuenta = 0;
  
        const intervalo = setInterval(() => {
          if (cuenta < this.texto.children.length) {
            this.texto.children[cuenta].classList.remove("animacion");
            cuenta += 1;
          } else {
            clearInterval(intervalo);
          }
        }, 20);
      });
    }
  }
  
  new TextoAnimado("name", "main__hero--text");
  