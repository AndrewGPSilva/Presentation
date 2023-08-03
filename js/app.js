window.sr = ScrollReveal({reset: true});
sr.reveal('.section', { durantion: 500 });
sr.reveal('.card', {durantion: 500});

function retornarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
