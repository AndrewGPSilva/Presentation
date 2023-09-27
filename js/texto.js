const el = document.querySelector("#text-boas-vindas");
const text= "DEV FULLSTACK";
const interval = 300;
const btnTopo = document.getElementById('btnTopo');

function showText(el, text, interval) {
  const char = text.split("").reverse();

  const typer = setInterval(() => {
    if(!char.length) {
      return clearInterval(typer);
    }
    
    const next = char.pop();

    el.innerHTML += next;
    
  }, interval);
}

showText(el, text, interval);

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

btnTopo.addEventListener('click', function retornarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});