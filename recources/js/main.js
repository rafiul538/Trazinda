var swiper = new Swiper('.swiper-hero', {
    autoplay: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new WOW().init();

function openSearch() {
    document.getElementById('search').style.width = "100%";
}


function closeSearch() {
    document.getElementById('search').style.width = "0";
}