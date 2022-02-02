$(document).ready(function () {
    $('.head-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
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