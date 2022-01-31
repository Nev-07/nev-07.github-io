$(document).ready(function () {
    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     dots: false,
    //     nav: true,
    //     navText: ["<i class='fa fa-chevron-left padd-btn'></i>", "<i class='fa fa-chevron-right padd-btn'></i>"],
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         10: {
    //             items: 1,
    //         },
    //     }
    // })

    // $('#span-btn').on('click', function(){
    //     $('.collapse').toggleClass('show')
    // })

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



    $(".scroll-up").on('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })


})

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('.scroll-up').addClass('scroll-show');
    }
    else if (y = 0) {
        $('.scroll-up').removeClass('scroll-show');
    }
    else {
        $('.scroll-up').removeClass('scroll-show');
    }

});

