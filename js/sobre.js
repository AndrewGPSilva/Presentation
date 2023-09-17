const texto = document.getElementById("sobre-infos");
const btn = document.getElementById("quer-me-conhecer");

btn.addEventListener("click", () => {
    texto.classList.toggle("sobre-infos-ativado");
})

const music = new Audio('/musicas/royalty.mp3');
const musicBt = document.querySelector('#music');

musicBt.addEventListener('click', ()=> {
    if(music.paused){
        music.play();
        music.volume = 0.5;
    } else {
        music.pause();
    }
})