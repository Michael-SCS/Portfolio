const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");

navbarToggle.addEventListener("click", () => {
  const isOpen = navbarToggle.getAttribute("aria-expanded") === "true";

  navbarToggle.setAttribute("aria-expanded", String(!isOpen));
  navbarLinks.classList.toggle("navbar-links-open", !isOpen);
  navbarToggle.querySelector(".sr-only").textContent = isOpen
    ? "Abrir menú de navegación"
    : "Cerrar menú de navegación";
});

navbarLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarToggle.setAttribute("aria-expanded", "false");
    navbarLinks.classList.remove("navbar-links-open");
    navbarToggle.querySelector(".sr-only").textContent =
      "Abrir menú de navegación";
  });
});
