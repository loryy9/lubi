document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            navbar.classList.add('menu-open');
        } else {
            navbar.classList.remove('menu-open');
        }
    });
});
