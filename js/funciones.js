/* FUNCIONES ABRIR Y CERRAR MENU NAVEGACION MOVIL */

const navegacion = document.querySelector(".navegacion"); // constante para seleccionar el elemento con la clase .navegacion
const botones = document.querySelectorAll(".abrir_header_movil,.cerrar_header_movil"); // constante para seleccionar los elementos con las clases .abrir_header_movil y .cerrar_header_movil

if(navegacion){ // el if evitará el error y así seguirá leyendo el código js si no encuentra esa constante en ese html. De esta manera sólo tendremos un archivo js conectado con todos los html.
    function toggleNavegacion(){ // función que añadirá y quitará la clase .desplegado a navegacion
        navegacion.classList.toggle("desplegado");
    };
}

if(botones){
    botones.forEach( boton => boton.addEventListener("click", toggleNavegacion)); // por cada botón al hacer click invocará la función para quitar o poner la clase .desplegado
}

/* FUNCIONES ANIMACION SENDERISTAS FOOTER */

const senderistas = document.querySelectorAll(".senderista"); // constante para seleccionar los elementos con la clase .senderista

if(senderistas){
    senderistas.forEach( hiker => { // por cada senderista, hiker, al hacer click se le añadadirá o quitará la clase .movimiento
        hiker.addEventListener("click", () => {
            hiker.classList.toggle("movimiento");
        });
    });
}



/* FUNCIONES ABRIR Y CERRAR LISTA DESPLEGABLE EN LOS LI DE NAVEGACION */

const submenu = document.querySelectorAll(".submenu"); // constante para seleccionar los elementos con la clase .submenu
const botonesTriangulo = document.querySelectorAll(".fa-circle-chevron-down"); // constante para seleccionar los elementos con las clase .fa-circle-chevron-down (icono flechita)

if(submenu){
    botonesTriangulo.forEach((boton,i) => { // por cada uno de los iconos, boton y indice de cada boton realizará una función
        boton.addEventListener("click", evento => { // al hacerle clik a ese boton realizará el siguiente evento
            evento.preventDefault(); // está función hará que no haga lo que por defecto tiene que hacer
            submenu[i].classList.toggle("visible_submenu"); // quitará o añadirá la clase .visible_submenu a cada submenu. Con el indice al que le corresponda
            botonesTriangulo[i].classList.toggle("rotate"); // quitará o añadirá la clase .rotate a cada boton (icono flechita). Con el indice al que le corresponda
        });
    });
}


/* FUNCIONES OCULTAR HEADER AL HACER SCROLL DOWN Y MOSTRARLO AL HACER SCROLL UP (basado en tutorial w3schools) */

let prevScrollpos = window.scrollY; // crea una variable con la posición del scroll previa
const headerSecundario = document.querySelector(".header_secundario");  // constante para seleccionar el elemento con la clase .header_secundario

if(headerSecundario){
    window.onscroll = function() {
    let currentScrollPos = window.scrollY; // crea una variable con la posición actual del scroll
    if (prevScrollpos > currentScrollPos) { // si la posición previa es mayor que la actual, es decir, si deslizamos scroll hacia abajo
    headerSecundario.style.top = "0px"; // la posicion de la cabecera será arriba del todo
    } else {
    headerSecundario.style.top = "-180px"; // sino (si delizamos el scroll hacia arriba) la posición de la cabecera será arriba de la pantalla actual
    }
    prevScrollpos = currentScrollPos; // para finalizar la posición previa y la actual son iguales, es decir, si seguimos deslizando hacia arriba el scroll seguirá arriba de esa pantalla
    };
}



/* FUNCIONES MODAL GALERIA */

const enlacesImagen = document.querySelectorAll(".galeria a"); // constante para seleccionar los elementos enlace dentro del elemento con la clase .galeria
const modal = document.querySelector(".modal_galeria");  // constante para seleccionar los elementos con la clase .modal_galeria
const imgModal = document.querySelector(".modal_galeria img"); // constante para seleccionar el elemento imagen dentro del elemento con la clase .modal_galeria
const flechas = document.querySelectorAll(".modal_galeria button"); // constante para seleccionar los elementos botón dentro del elemento con la clase .modal_galeria
const cerrarModal = document.querySelector(".boton_cerrar"); // constante para seleccionar los elementos con la clase .boton_cerrar
let indiceImg = 0; // variable para crear un contador que tenga valor 0

if(enlacesImagen){
    enlacesImagen.forEach((enlaceImg,i) => { // por cada uno de los enlaces realizará una función
        enlaceImg.addEventListener("click", evento => { // al hacerle clik a ese enlace realizará el siguiente evento
            evento.preventDefault(); // está función hará que no haga lo que por defecto tiene que hacer
            indiceImg = i; // el contador tenga el valor del indice de los enlaces
            imgModal.setAttribute("src",enlaceImg.getAttribute("href")); // cambiará al atributo src de la imagen por el del atributo href del enlace seleccionado
            modal.classList.add("visible"); // añadirá la clase .visible
        });
    });
}

if(cerrarModal){
    cerrarModal.addEventListener("click", () => { // al hacerle click a ese botón realizará el siguiente evento
        modal.classList.remove("visible"); // elimina la clase .visible
    });
}

if(flechas){
    flechas.forEach((flecha,i) => {
        flecha.addEventListener("click", (evento) => { // al hacerle click a ese botón flecha realizará el siguiente evento
            evento.stopPropagation(); //interrumpe el bubbling y así no lee los otros ”click” al regresar al inicio del html
            if(i == 0){ // si el indice es igual a 0
                indiceImg = indiceImg > 0 ? indiceImg - 1 : enlacesImagen.length - 1; // si el contador es mayor que 0, resta 1 y sino el numero total de enlaces menos 1. Para pasar las imágenes hacia 'atrás'
            }else{ // si el indice no es igual a 0 
                indiceImg = indiceImg < enlacesImagen.length - 1 ? indiceImg + 1: 0; // si el contador es menor que el numero de enlaces menos 1 suma 1 y sino 0. Para pasar las imágenes hacia 'adelante'
            }
            imgModal.setAttribute("src",enlacesImagen[indiceImg].getAttribute("href")); // cambiará al atributo src de la imagen por el del atributo href del enlace seleccionado cada vez que hagamos click en los botones con el contador que parte de 0 como referencia
        });
    });
}


/* FUNCIONES FORMUALARIO-CONSULTA ENVIADA */

const enviarConsulta = document.querySelector('form input[type="submit"]');  // constante para seleccionar el elemento input con la clase .submit dentro de su type, dentro de un formulario.
const consultaEnviada = document.querySelector(".modal_consulta");  // constante para seleccionar el elemento con la clase .modal_consulta
const formulario = document.querySelector("form");  // constante para seleccionar el elemento formulario
const cerrar = document.querySelector(".boton_cerrar");  // constante para seleccionar el elemento con la clase .boton_cerrar

if(enviarConsulta){
    enviarConsulta.addEventListener("click", evento => { // al hacerle click a ese botón flecha realizará el siguiente evento
        evento.preventDefault(); // está función hará que no haga lo que por defecto tiene que hacer
        consultaEnviada.classList.add("visible"); // añadirá la clase .visible
        formulario.reset(); // resetea todo el formulario y vacía los placeholder (función aplicada de tutorial w3schools)
    });
}

if(cerrar){
    cerrar.addEventListener("click", () => { // al hacerle click a ese botón realizará el siguiente evento
        consultaEnviada.classList.remove("visible"); // elimina la clase .visible
    });
}
