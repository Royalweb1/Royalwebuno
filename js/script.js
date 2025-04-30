// Efecto de animación suave cuando las secciones aparecen
document.addEventListener("DOMContentLoaded", function () {
  const secciones = document.querySelectorAll(".section");

  const opciones = {
    threshold: 0.2,
  };

  const aparecer = new IntersectionObserver(function (entradas, aparecer) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) {
        return;
      } else {
        entrada.target.classList.add("appear");
        aparecer.unobserve(entrada.target);
      }
    });
  }, opciones);

  secciones.forEach(function (section) {
    aparecer.observe(section);
  });
});