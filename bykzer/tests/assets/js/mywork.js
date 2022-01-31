$(document).ready(function () {


    $('.pic-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-chevron-left padd-btn'></i>", "<i class='fa fa-chevron-right padd-btn'></i>"],
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

    $('.review-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-chevron-left btn-small'></i>", "<i class='fa fa-chevron-right btn-small'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            10: {
                items: 1,
            },
        }
    });

    $('.remarks-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-chevron-left btn-small'></i>", "<i class='fa fa-chevron-right btn-small'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            10: {
                items: 1,
            },
        }
    });



    function findOS(){
        if (navigator.userAgent.indexOf("Win") != -1){
            return  "Windows";
        }  
        if (navigator.userAgent.indexOf("Mac") != -1){
            return  "MacOs";
        }
        if (navigator.userAgent.indexOf("Android") != -1){ 
          "Android OS";
        }
    }

    

    $("#redirect").on('click', function(){
        const oS = findOS();
        const ps_link = "https://play.google.com/store/apps";
        const mac_link = "https://www.apple.com/mac/";
        const win_link = "https://www.microsoft.com/en-pk/store/apps/windows";

        if (oS === "Android OS") {
            $("#redirect").attr("href", ps_link);
        }

        if (oS === "MacOS") {
            $("#redirect").attr("href", mac_link);
        }

        if (oS === "Windows") {
            $("#redirect").attr("href", win_link);
        }
    })

    let switchBtn = $(".swap");


    $(".myBtn").on('click', function () {
        $(".mobile-links").addClass("mobile-nav-expand");
        switchBtn.addClass("fa-times")
    });

    $(".back-btn").on('click', function(){
        $(".mobile-links").removeClass("mobile-nav-expand");
        switchBtn.removeClass("fa-times")
    })

    $(".b1").on('click', function(){
        $("div #dropdown1").slideToggle();
        $(".arr-1").toggleClass("fa-plus")
        $(".arr-1").toggleClass("fa-minus")
    })
    $(".b2").on('click', function(){
        $("div #dropdown2").slideToggle();
        $(".arr-2").toggleClass("fa-plus")
        $(".arr-2").toggleClass("fa-minus")    
    })
    $(".b3").on('click', function(){
        $("div #dropdown3").slideToggle();
        $(".arr-3").toggleClass("fa-plus")
        $(".arr-3").toggleClass("fa-minus")    
    })
    $(".b4").on('click', function(){
        $("div #dropdown4").slideToggle();
        $(".arr-4").toggleClass("fa-plus")
        $(".arr-4").toggleClass("fa-minus")    
    })
    $(".b5").on('click', function(){
        $("div #dropdown5").slideToggle();
        $(".arr-5").toggleClass("fa-plus")
        $(".arr-5").toggleClass("fa-minus")    
    })
    $(".b6").on('click', function(){
        $("div #dropdown6").slideToggle();
        $(".arr-6").toggleClass("fa-plus")
        $(".arr-6").toggleClass("fa-minus")    
    })
})

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 0) {
        $('.nav-sec').addClass('sticky');
    }
    else{
        $('.nav-sec').removeClass('sticky');
    }
    
});