document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Mobile Menu Toggle
  ========================== */
  const menuBtn = document.querySelector("[data-menu-btn]");
  const navLinks = document.querySelector("[data-navlinks]");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu after clicking a link (mobile UX)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     Active Nav Link Highlight
  ========================== */
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navlinks a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

});
