// Panel lateral desplegable
const btnToggle = document.querySelector(".header__menu--icon");
btnToggle.addEventListener("click", function () {
  document.getElementById("aside").classList.toggle("active");
  document.getElementById("main").classList.toggle("opacity");
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
    document
      .getElementById("btn-toggle")
      .classList.remove("header__menu--close-icon");
  }
});

// Ocultar Header
let scroll = window.pageYOffset;
window.onscroll = function () {
  let desplazamiento_actual = window.pageYOffset;
  if (scroll >= desplazamiento_actual) {
    this.document.getElementById("header").style.top = "0";
    this.document.getElementById("aside").style.top = "0";
    if (window.pageYOffset > 0) {
      this.document.getElementById("header").style.boxShadow =
        "0px 0px 50px 10px rgba(0,0,0,0.80)";
    } else if (window.pageYOffset == 0) {
      this.document.getElementById("header").style.boxShadow = "none";
    }
  } else if (document.getElementById("aside").classList.contains("active")) {
    this.document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
    document.getElementById("aside").style.top = "100px";
    this.document.getElementById("header").style.boxShadow = "none";
  }
  scroll = desplazamiento_actual;
};