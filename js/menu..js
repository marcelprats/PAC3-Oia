document.addEventListener("DOMContentLoaded", function() {
    function toggleMenu() {
        const menu = document.querySelector('.navbar ul');
        menu.classList.toggle('active');
    }

    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
});