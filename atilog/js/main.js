$(function() {

            /* Scrol*/

    $("[data-scroll]").click(function(event){
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elemanOffset = $(elementId).offset().top;


        $("html, body").animate({
            scrollTop:elemanOffset - 50
        },700)

    })



});
