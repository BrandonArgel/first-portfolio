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
      this.document.getElementById("header").style.backgroundColor =
        "rgba(13, 20, 38, .90)";
      document.getElementById("header").classList.add("filter");
    } else if (window.pageYOffset == 0) {
      this.document.getElementById("header").style.boxShadow = "none";
      this.document.getElementById("header").style.background = "transparent";
      document.getElementById("header").classList.remove("filter");
    }
  } else if (document.getElementById("aside").classList.contains("active")) {
    this.document.getElementById("header").style.top = "0";
    document.getElementById("header").classList.add("filter");
  } else {
    document.getElementById("header").style.top = "-100px";
    document.getElementById("aside").style.top = "100px";
    this.document.getElementById("header").style.boxShadow = "none";
    document.getElementById("header").classList.add("filter");
  }
  scroll = desplazamiento_actual;
};

var img = new Image();
img.src = "../assets/svg/close.svg";