

/* FUNCIONES ABRIR Y CERRAR MENU NAVEGACION MOVIL */

const navegacion = document.querySelector(".navegacion"); // constante para seleccionar el elemento con la clase .navegacion
const botones = document.querySelectorAll(".abrir_header_movil,.cerrar_header_movil"); // constante para seleccionar los elementos con las clases .abrir_header_movil y .cerrar_header_movil

if(navegacion){ // el if evita el error y así sigue leyendo el código js si no encuentra esa constante en ese html. De esta manera sólo tendremos un archivo js conectado con todos los html.
    function toggleNavegacion(){ // función para añadir y quitar la clase .desplegado a navegacion
        navegacion.classList.toggle("desplegado");
    };
}

if(botones){
    botones.forEach( boton => boton.addEventListener("click", toggleNavegacion)); // por cada botón al hacer click invocar la función para quitar o poner la clase .desplegado
}

/* FUNCIONES ANIMACION SENDERISTAS FOOTER */

const senderistas = document.querySelectorAll(".senderista");

if(senderistas){
    senderistas.forEach( hiker => {
        hiker.addEventListener("click", () => {
            hiker.classList.toggle("movimiento");
        });
    });
}



/* FUNCIONES ABRIR Y CERRAR LISTA DESPLEGABLE EN LOS LI DE NAVEGACION */

const submenu = document.querySelectorAll(".submenu");
const botonesTriangulo = document.querySelectorAll(".fa-square-caret-left");
navListaDesplegable = []

if(submenu){
    botonesTriangulo.forEach((boton,i) => {
        boton.addEventListener("click", evento => {
            evento.preventDefault();
            submenu[i].classList.toggle("visible_submenu");
            botonesTriangulo[i].classList.toggle("rotate_-90deg");
        });
    });
}


/* FUNCIONES OCULTAR HEADER AL HACER SCROLL DOWN Y MOSTRARLO AL HACER SCROLL UP (basado en tutorial w3schools) */

let prevScrollpos = window.scrollY;
const headerSecundario = document.querySelector(".header_secundario");  // constante para seleccionar el elemento con la clase .header_secundario

if(headerSecundario){
    window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
    headerSecundario.style.top = "0px";
    } else {
    headerSecundario.style.top = "-180px";
    }
    prevScrollpos = currentScrollPos;
    };
}



/* FUNCIONES MODAL GALERIA */

const enlacesImagen = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal_galeria");
const imgModal = document.querySelector(".modal_galeria img");
const flechas = document.querySelectorAll(".modal_galeria button");
const cerrarModal = document.querySelector(".boton_cerrar");
let indiceImg = 0;

if(enlacesImagen){
    enlacesImagen.forEach((enlaceImg,i) => {
        enlaceImg.addEventListener("click", evento => {
            evento.preventDefault();
            indiceImg = i;
            imgModal.setAttribute("src",enlaceImg.getAttribute("href"));
            modal.classList.add("visible");
        });
    });
}

if(cerrarModal){
    cerrarModal.addEventListener("click", () => {
        modal.classList.remove("visible");
    });
}

if(flechas){
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
}


/* FUNCIONES FORMUALARIO-CONSULTA ENVIADA */

const enviarConsulta = document.querySelector('form input[type="submit"]');
const consultaEnviada = document.querySelector(".modal_consulta");
const formulario = document.querySelector("form");
const cerrar = document.querySelector(".boton_cerrar");

if(enviarConsulta){
    enviarConsulta.addEventListener("click", evento => {
        evento.preventDefault();
        consultaEnviada.classList.add("visible");
        formulario.reset(); // resetea todo el formulario y vacía los placeholder (función aplicada de tutorial w3schools)
    });
}

if(cerrar){
    cerrar.addEventListener("click", () => {
        consultaEnviada.classList.remove("visible");
    });
}
