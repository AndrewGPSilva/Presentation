const texto = document.getElementById("sobre-infos");
const btn = document.getElementById("quer-me-conhecer");

btn.addEventListener("click", () => {
    texto.classList.toggle("sobre-infos-ativado");
})