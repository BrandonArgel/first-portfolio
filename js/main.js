// Panel lateral desplegable
const btnToggle = document.querySelector(".header__menu--icon");
btnToggle.addEventListener("click", function () {
  document.getElementById("aside").classList.toggle("active");
  document.getElementById("main").classList.toggle("opacity");
  document.getElementById("particles-js").classList.toggle("opacity");
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
    document.getElementById("particles-js").classList.toggle("opacity");
    document
      .getElementById("btn-toggle")
      .classList.remove("header__menu--close-icon");
  }
});

// Ocultar Header
let scroll = window.pageYOffset;
window.onscroll = function () {
  let desplazamiento_actual = window.pageYOffset;
  if (window.pageYOffset > 0) {
    this.document.getElementById("header").style.background =
      "rgba(13, 20, 38, .95)";
    this.document.getElementById("header").style.boxShadow =
      "rgba(0, 0, 0, 0.80)";
    document.getElementById("header").classList.add("filter");
  } else if (window.pageYOffset == 0) {
    this.document.getElementById("header").style.boxShadow = "none";
    this.document.getElementById("header").style.background = "transparent";
    document.getElementById("header").classList.remove("filter");
  }
  scroll = desplazamiento_actual;
};
