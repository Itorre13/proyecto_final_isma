const enlacesImagen = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal_galeria");
const imgModal = document.querySelector(".modal_galeria img");
const flechas = document.querySelectorAll(".modal_galeria button");
const cerrar = document.querySelector(".boton_cerrar");
let indiceImg = 0;

enlacesImagen.forEach((enlaceImg,i) => {
    enlaceImg.addEventListener("click", evento => {
        evento.preventDefault();
        indiceImg = i;
        imgModal.setAttribute("src",enlaceImg.getAttribute("href"));
        modal.classList.add("visible");
    });
}); 

cerrar.addEventListener("click", () => {
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
