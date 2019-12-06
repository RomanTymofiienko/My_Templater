$(function() {

//    Scroll

        $("[data-scroll]").click(function(event){
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elemanOffset = $(elementId).offset().top - 80;


        $("html, body").animate({
            scrollTop:elemanOffset
        },700)

    })


//    Arrov

    $('.arrow').click(function () {
    $('html, body').animate({
        scrollTop: $("#wrapper").offset().top
    }, 2000);
});

});

//ar slideNow = 1;
//var slideCount = $('#comments').children().length;
//var slideInterval = 3000;
//var navBtnId = 0;
//var translateWidth = 0;
//
//$(document).ready(function() {
//    var switchInterval = setInterval(nextSlide, slideInterval);
//
//    $('#box').hover(function() {
//        clearInterval(switchInterval);
//    }, function() {
//        switchInterval = setInterval(nextSlide, slideInterval);
//    });
//
//    $('#next-btn').click(function() {
//        nextSlide();
//    });
//
//    $('#prev-btn').click(function() {
//        prevSlide();
//    });
//
//    $('.slide-nav-btn').click(function() {
//        navBtnId = $(this).index();
//
//        if (navBtnId + 1 != slideNow) {
//            translateWidth = -$('#box').width() * (navBtnId);
//            $('#comments').css({
//                'transform': 'translate(' + translateWidth + 'px, 0)',
//                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//            });
//            slideNow = navBtnId + 1;
//        }
//    });
//});
//
//
//function nextSlide() {
//    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//        $('#comments').css('transform', 'translate(0, 0)');
//        slideNow = 1;
//    } else {
//        translateWidth = -$('#box').width() * (slideNow);
//        $('#comments').css({
//            'transform': 'translate(' + translateWidth + 'px, 0)',
//            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//        });
//        slideNow++;
//    }
//}
//
//function prevSlide() {
//    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//        translateWidth = -$('#box').width() * (slideCount - 1);
//        $('#comments').css({
//            'transform': 'translate(' + translateWidth + 'px, 0)',
//            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//        });
//        slideNow = slideCount;
//    } else {
//        translateWidth = -$('#box').width() * (slideNow - 2);
//        $('#comments').css({
//            'transform': 'translate(' + translateWidth + 'px, 0)',
//            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//        });
//        slideNow--;
//    }
//}
