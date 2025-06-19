document.addEventListener("DOMContentLoaded", () => {
  let prevScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scroll hacia arriba → mostrar navbar
      navbar.style.top = "0";
    } else {
      // Scroll hacia abajo → ocultar navbar
      navbar.style.top = "-80px"; // Ajusta este valor si tu navbar es más alto o bajo
    }

    prevScrollPos = currentScrollPos;
  });
});
