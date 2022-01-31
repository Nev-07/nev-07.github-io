$(document).ready(function(){
    $("#list-ld").on('click', function (e) {
        $(".nav-sec").toggleClass("blk-bg")
        $(".switch-bg-lb").toggleClass("bg-lb")
        $(".switch-w").toggleClass("text-w")
        $(".switch-bg").toggleClass("grey-bg")
        $(".toggle-b").toggleClass("toggle-btn-w")
        $(".switch-filter").toggleClass("img-switch")
        $("h4").toggleClass("text-w")
        $("h3").toggleClass("text-w")
        $("h5").toggleClass("text-w")
        $("p").toggleClass("text-w")
        $(".li-light").toggleClass("list-white")
    });
})
