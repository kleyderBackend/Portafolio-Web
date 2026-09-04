const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.getElementById("main-menu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainMenu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
  });
}
