window.addEventListener('scroll', function() {
    var pcImage = document.getElementById('pc_home');
    var pendriveImage = document.getElementById('pendrive_home');
    var TitleHome  = document.getElementById('title_home');
    var btnShop = document.getElementById('info-shop');
    var btnShopRect = btnShop.getBoundingClientRect();
    var scrollPosition = window.scrollY;


    if (scrollPosition > 0) { // Change this value according to when you want the animation to trigger
        pcImage.classList.add('pc-home-scroll');
        pendriveImage.classList.add('pendrive-home-scroll');
        TitleHome.classList.add('title-home-scroll')
    } else {
        pcImage.classList.remove('pc-home-scroll');
        pendriveImage.classList.remove('pendrive-home-scroll');
        TitleHome.classList.remove('title-home-scroll')
    }

    // Aggiungi questa parte per far oscillare l'elemento infoshop
    if (btnShopRect.top + btnShopRect.height > 0 && btnShopRect.top < this.window.innerHeight && scrollPosition > 0) {
        btnShop.classList.add('infoshop-oscillate');

    } else {
        btnShop.classList.remove('infoshop-oscillate');
    }
});