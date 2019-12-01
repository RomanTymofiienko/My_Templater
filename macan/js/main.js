$(function() {

//    Scroll

        $("[data-scroll]").click(function(event){
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elemanOffset = $(elementId).offset().top;


        $("html, body").animate({
            scrollTop:elemanOffset
        },700)

    })


//    Arrov

    $('.arrow').click(function () {
    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);
});


});
