document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.menu-links a'); // Seleziona tutti i link del menu

    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            navbar.classList.add('menu-open');
        } else {
            navbar.classList.remove('menu-open');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.checked = false; // Deseleziona il checkbox
            navbar.classList.remove('menu-open'); // Rimuove la classe 'menu-open'
        });
    });
});