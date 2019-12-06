$(document).ready(function() {


/* Scrol*/

    $("[data-scroll]").click(function(event){
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elemanOffset = $(elementId).offset().top;


        $("html, body").animate({
            scrollTop:elemanOffset - 100
        },700)

    });

////    Slider
//
//    $(".next").click(function(){
//        var currentImage = $(".img.curry");
//        var currentImageIndex = $(".img.curry").index();
//        var nextImageIndex = currentImageIndex + 1;
//        var nextImage = $(".img").eq(nextImageIndex);
//        currentImage.fadeOut(1000);
//        currentImage.removeClass("curry");
//
//        if(nextImageIndex == ($(".img:last").index()+1)){
//            $(".img").eq(0).fadeIn(1000);
//            $(".img").eq(0).addClass("curry");
//        } else {
//            nextImage.fadeIn(1000);
//            nextImage.addClass("curry");
//        }
//    });
//
//     $(".prev").click(function(){
//        var currentImage = $(".img.curry");
//        var currentImageIndex = $(".img.curry").index();
//        var prevImageIndex = currentImageIndex - 1;
//        var prevImage = $(".img").eq(prevImageIndex);
//
//        currentImage.fadeOut(1000);
//        currentImage.removeClass("curry");
//        prevImage.fadeIn(1000);
//        prevImage.addClass("curry");
//     });


    $("#web").on("click", function(){
        $("#first").css({"display":"flex"});
        $("#nth_2").hide(0);
        $("#last").hide(0);
    });
        $("#photography").on("click", function(){
        $("#first").hide(0);
        $("#nth_2").css({"display":"block"});
        $("#last").hide(0);
    });
        $("#graphics").on("click", function(){
        $("#first").hide(0);
        $("#nth_2").hide(0);
        $("#last").css({"display":"block"});
    });

    $("#box").slick({
        nextArrow:'<button type = "button" class = "next slick-next"></ button>',
        prevArrow:'<button type = "button" class = "prev slick-prev"></ button>',

    });


});



