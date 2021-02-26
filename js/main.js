// Ocultar Header
let scroll = window.pageYOffset;
window.onscroll = function () {
  let desplazamiento_actual = window.pageYOffset;
  if (scroll >= desplazamiento_actual) {
    this.document.getElementById("header").style.top = "0";
    if (window.pageYOffset > 0) {
      this.document.getElementById("header").style.boxShadow =
        "0px 0px 50px 10px rgba(0,0,0,0.80)";
    } else if (window.pageYOffset == 0) {
      this.document.getElementById("header").style.boxShadow = "none";
    }
  } else {
    document.getElementById("header").style.top = "-100px";
    this.document.getElementById("header").style.boxShadow = "none";
  }
  scroll = desplazamiento_actual;
};