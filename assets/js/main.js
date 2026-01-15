// JavaScript source code
// Mobile menu toggle
const menuBtn = document.querySelector('[data-menu-btn]');
const navLinks = document.querySelector('[data-navlinks]');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

// Auto-active nav link based on current file name
(function setActiveNav() {
    const links = document.querySelectorAll('[data-nav] a');
    const path = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(a => {
        const href = a.getAttribute('href');
        if (href === path) a.classList.add('active');
    });
})();