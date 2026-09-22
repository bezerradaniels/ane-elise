// Header: fundo sólido ao rolar a página
const header = document.getElementById("site-header");
const SCROLLED_CLASSES = ["bg-white/95", "backdrop-blur-md", "shadow-sm"];

function updateHeader() {
  const scrolled = window.scrollY > 50;
  header.classList.toggle("bg-transparent", !scrolled);
  SCROLLED_CLASSES.forEach((c) => header.classList.toggle(c, scrolled));
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Menu mobile
const menu = document.getElementById("mobile-menu");
const toggle = document.getElementById("menu-toggle");
const iconOpen = document.getElementById("menu-icon-open");
const iconClose = document.getElementById("menu-icon-close");

function setMenu(open) {
  menu.hidden = !open;
  iconOpen.hidden = open;
  iconClose.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  document.body.style.overflow = open ? "hidden" : "";
}

toggle.addEventListener("click", () => setMenu(menu.hidden));
document.querySelectorAll("[data-close-menu]").forEach((el) =>
  el.addEventListener("click", () => setMenu(false))
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !menu.hidden) setMenu(false);
});

// Carrossel de resultados (mobile)
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const dots = carousel.querySelectorAll("[data-carousel-dot]");
  const total = track.children.length;
  let current = 0;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-(--brand-wine)", i === current);
      dot.classList.toggle("bg-(--brand-wine)/30", i !== current);
    });
  }

  carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => goTo(current - 1));
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
});

// Ano do rodapé
document.getElementById("current-year").textContent = new Date().getFullYear();
