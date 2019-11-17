$(function() {


/* Scrol*/

//    $("[data-scroll]").on("clik", function(event){
//        event.preventDefault();
//
//        let elementId = $(this).data("scroll");
//        let elemanOffset = $(elementId).offset().top;
//
//
//        $("html, body").animate({
//            scrollTop:elemanOffset - 100
//        },700)
//
//    })

    $('.head_column').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('header').offset().top
        }, 2000);
    });

});


