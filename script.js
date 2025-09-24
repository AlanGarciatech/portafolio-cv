// Efecto de escritura
const text = "Alan Uriel Garcia Campos - Full Stack Java Developer";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Scroll Reveal
ScrollReveal().reveal('#sobre-mi', { delay: 200, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#habilidades', { delay: 400, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#proyectos', { delay: 600, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#contacto', { delay: 800, origin: 'bottom', distance: '50px' });

// Botón "Volver arriba"
window.onscroll = function () {
  document.getElementById("btn-top").style.display = window.scrollY > 300 ? "block" : "none";
};

document.getElementById("btn-top").onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
