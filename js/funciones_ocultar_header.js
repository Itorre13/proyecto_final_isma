let prevScrollpos = window.pageYOffset;
const headerSecundario = document.querySelector(".header_secundario");

window.onscroll = function() {
 let currentScrollPos = window.pageYOffset;
 if (prevScrollpos > currentScrollPos) {
  headerSecundario.style.top = "0px";
} else {
  headerSecundario.style.top = "-180px";
 }
prevScrollpos = currentScrollPos;
} 