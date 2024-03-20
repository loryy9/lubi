window.addEventListener('scroll', function() {
    var pcImage = document.getElementById('pc_home');
    var pendriveImage = document.getElementById('pendrive_home');
    var TitleHome  = document.getElementById('title_home');
    var btnShop = document.getElementById('info-shop');
    var btnShopRect = btnShop.getBoundingClientRect();
    var scrollPosition = window.scrollY;


    if (scrollPosition > 0) { 
        pcImage.classList.add('pc-home-scroll');
        pendriveImage.classList.add('pendrive-home-scroll');
        TitleHome.classList.add('title-home-scroll');
    } else {
        pcImage.classList.remove('pc-home-scroll');
        pendriveImage.classList.remove('pendrive-home-scroll');
        TitleHome.classList.remove('title-home-scroll');
    }


    if (btnShopRect.top + btnShopRect.height > 0 && btnShopRect.top < window.innerHeight && scrollPosition > 0) {
        btnShop.classList.add('infoshop-oscillate');
    } else {
        btnShop.classList.remove('infoshop-oscillate');
    }

    var cardContainer = document.querySelector('.card-container');
    var cardContainerRect = cardContainer.getBoundingClientRect();

    if (cardContainerRect.top + cardContainerRect.height > 0 && cardContainerRect.top < window.innerHeight && scrollPosition > 0) {
        cardContainer.classList.add('in-view');
    } else {
        cardContainer.classList.remove('in-view');
    }
});
