// Panel lateral desplegable
const btnToggle = document.querySelector(".header__menu--icon");
btnToggle.addEventListener("click", function () {
  document.getElementById("aside").classList.toggle("active");
  document.getElementById("main").classList.toggle("opacity");
  document.getElementById("particles-js").classList.toggle("index");
  document
    .getElementById("btn-toggle")
    .classList.toggle("header__menu--close-icon");
});

// Cerrar panel haciendo click en el main
const panelToggle = document.querySelector("main");
panelToggle.addEventListener("click", function () {
  if (document.getElementById("aside").classList.contains("active")) {
    document.getElementById("aside").classList.toggle("active");
    document.getElementById("main").classList.toggle("opacity");
    document.getElementById("particles-js").classList.toggle("index");
    document
      .getElementById("btn-toggle")
      .classList.remove("header__menu--close-icon");
  }
});

let ToggleA = document.querySelector("a.a"),
  ToggleB = document.querySelector("a.b"),
  ToggleC = document.querySelector("a.c");
ToggleA.addEventListener("click", aClose);
ToggleB.addEventListener("click", aClose);
ToggleC.addEventListener("click", aClose);

function aClose() {
  setTimeout(function () {
    if (document.getElementById("aside").classList.contains("active")) {
      document.getElementById("aside").classList.toggle("active");
      document.getElementById("particles-js").classList.toggle("index");
      document.getElementById("main").classList.toggle("opacity");
      document
        .getElementById("btn-toggle")
        .classList.remove("header__menu--close-icon");
    }
  }, 100);
}

// Header
let scroll = window.pageYOffset;
window.onscroll = function () {
  let desplazamiento_actual = window.pageYOffset;
  if (window.pageYOffset > 0) {
    this.document.getElementById("header").style.background =
      "rgba(13, 20, 38, .95)";
    this.document.getElementById("header").style.boxShadow =
      "0px 0px 50px 10px rgba(0, 0, 0, 0.80)";
    document.getElementById("header").classList.add("filter");
  } else if (window.pageYOffset == 0) {
    this.document.getElementById("header").style.boxShadow = "none";
    this.document.getElementById("header").style.background = "transparent";
    document.getElementById("header").classList.remove("filter");
  }
  scroll = desplazamiento_actual;
};

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
