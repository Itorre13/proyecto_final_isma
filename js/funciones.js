//funciones movimiento senderistas footer
const senderistas = document.querySelectorAll(".senderista");

senderistas.forEach( hiker => {
    hiker.addEventListener("click", () => {
        hiker.classList.toggle("movimiento");
    });
});


//funciones ocultar header al hacer scroll hacia abajo(basado en tutorial w3schools)
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
};


//funciones galeria
const enlacesImagen = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal_galeria");
const imgModal = document.querySelector(".modal_galeria img");
const flechas = document.querySelectorAll(".modal_galeria button");
const cerrarModal = document.querySelector(".boton_cerrar");
let indiceImg = 0;

enlacesImagen.forEach((enlaceImg,i) => {
    enlaceImg.addEventListener("click", evento => {
        evento.preventDefault();
        indiceImg = i;
        imgModal.setAttribute("src",enlaceImg.getAttribute("href"));
        modal.classList.add("visible");
    });
}); 

cerrarModal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

flechas.forEach((flecha,i) => {
    flecha.addEventListener("click", (evento) => {
        evento.stopPropagation();
        if(i == 0){
            indiceImg = indiceImg > 0 ? indiceImg - 1 : enlacesImagen.length - 1;
        }else{
            indiceImg = indiceImg < enlacesImagen.length - 1 ? indiceImg + 1: 0;
        }
        imgModal.setAttribute("src",enlacesImagen[indiceImg].getAttribute("href"));
    });
});


//funciones formulario - consulta enviada

const enviarConsulta = document.querySelector('form input[type="submit"]');
const consultaEnviada = document.querySelector(".modal_consulta");
const formulario = document.querySelector("form");
const cerrar = document.querySelector(".boton_cerrar");

enviarConsulta.addEventListener("click", evento => {
    evento.preventDefault();
    consultaEnviada.classList.add("visible");
    formulario.reset(); // resetea todo el formulario y vacía los placeholder
});

cerrar.addEventListener("click", () => {
    consultaEnviada.classList.remove("visible");
});

//funciones abrir-cerrar navegador movil

const navegacion = document.querySelector(".header_principal_movil");
const botones = document.querySelectorAll(".abrir_header_movil,.cerrar_header_movil")

function toggleNavegacion(){
    navegacion.classList.toggle("desplegado");
    
}
botones.forEach( boton => boton.addEventListener("click", toggleNavegacion));
