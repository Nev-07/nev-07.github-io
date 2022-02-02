$(document).ready(function () {
    $('.head-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            10: {
                items: 1,
            },
        }
    })

    $('.main-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            10: {
                items: 1,
            },
        }
    })
})