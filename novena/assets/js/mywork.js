$(document).ready(function () {
    $('.serve-carousel').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            10: {
                items: 2,
            },
        }
    })

    $('.supp-carousel').owlCarousel({
        dots: false,
        items: 6,
        slideBy: 2
    })



    let switchBtn = $(".swap");


    $(".myBtn").on('click', function () {
        $(".mobile-links").toggleClass("mobile-nav-expand");

        if (switchBtn.hasClass("fa-times")) {
            switchBtn.removeClass("fa-times")
        }
        else if (!switchBtn.hasClass("fa-times")) {
            switchBtn.addClass("fa-times")
        }
    });
})