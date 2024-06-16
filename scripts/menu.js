document.addEventListener('DOMContentLoaded', function() {
    // Codice per il menu toggle
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

    // Codice per il popup
    var btn = document.getElementById("open-popup");
    var span = document.getElementsByClassName("close")[0];
    var closeBtn = document.getElementById("close-popup");
    var popup = document.getElementById("popup"); // Assicurati che ci sia un elemento con id "popup"

    function openPopup() {
        popup.style.display = "block";
        document.body.classList.add('no-scroll');
        popup.classList.remove('fade-out'); // Assicura che la classe di fade-out sia rimossa
        popup.classList.add('fade-in'); // Aggiunge la classe di fade-in per l'apertura
    }

    function closePopup() {
        popup.classList.remove('fade-in'); // Rimuove la classe di fade-in
        popup.classList.add('fade-out'); // Aggiunge la classe di fade-out per la chiusura
        setTimeout(function() {
            popup.style.display = "none"; // Nasconde il popup dopo l'animazione di fade-out
        }, 300); // Tempo corrispondente alla durata dell'animazione in millisecondi
        document.body.classList.remove('no-scroll');
    }

    btn.onclick = openPopup;
    span.onclick = closePopup;
    closeBtn.onclick = closePopup;

    window.onclick = function(event) {
        if (event.target == popup) {
            closePopup();
        }
    }
});
