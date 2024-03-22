function topFunction() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth' // Opzione per lo scorrimento animato
    });
}

window.addEventListener('DOMContentLoaded', function() {
    // Gestione dell'animazione delle carte quando diventano visibili
    const cards = document.querySelectorAll('.card-action');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view'); // Aggiungi la classe "in-view" alla carta visibile
            }
        });
    }

    

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Gestione dell'animazione durante lo scroll
    window.addEventListener('scroll', function() {
        var pcImage = document.getElementById('pc_home');
        var pendriveImage = document.getElementById('pendrive_home');
        var TitleHome  = document.getElementById('title_home');
        var btnShop = document.getElementById('info-shop');
        var btnShopRect = btnShop.getBoundingClientRect();
        var scrollPosition = window.scrollY;

        // Gestione dell'animazione per le immagini pc_home, pendrive_home e title_home
        if (scrollPosition > 0) { 
            pcImage.classList.add('pc-home-scroll');
            pendriveImage.classList.add('pendrive-home-scroll');
            TitleHome.classList.add('title-home-scroll');
        } else {
            pcImage.classList.remove('pc-home-scroll');
            pendriveImage.classList.remove('pendrive-home-scroll');
            TitleHome.classList.remove('title-home-scroll');
        }

        // Gestione dell'animazione per il pulsante info-shop
        if (btnShopRect.top + btnShopRect.height > 0 && btnShopRect.top < window.innerHeight && scrollPosition > 0) {
            btnShop.classList.add('infoshop-oscillate');
        } else {
            btnShop.classList.remove('infoshop-oscillate');
        }
    });
});
