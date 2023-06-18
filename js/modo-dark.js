const btn = document.getElementById("botao");
const section = document.getElementById("principal");

btn.addEventListener('click', function() {
  section.classList.toggle("darkmode");
});