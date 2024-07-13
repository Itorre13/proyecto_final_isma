const enviarConsulta = document.querySelector('form input[type="submit"]');
const consultaEnviada = document.querySelector(".modal_consulta");
const cerrar = document.querySelector(".boton_cerrar");

enviarConsulta.addEventListener("click", evento => {
    evento.preventDefault();
    consultaEnviada.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    consultaEnviada.classList.remove("visible");
});