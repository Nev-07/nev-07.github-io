$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 0) {
        $('.nav-sec').addClass('sticky');
    }
    else{
        $('.nav-sec').removeClass('sticky');
    }
    
});