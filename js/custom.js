$(window).scroll(function () {
    if ($(document).scrollTop() > 500) {
        $('nav').addClass('fixed-top')
    } else {
        $('nav').removeClass('fixed-top');
    }
});

$(document).ready(function () {    
    
//    $('.carousel-control-prev-icon').click(function() {
//        $(this).siblings('.carousel-item').removeClass('activ');
//        $(this).addClass('activ');
//        $(this).addClass('activ');
//    });
    
        $('.carousel-control-prev-icon:after').click(function(event) {
                $('.item1').removeClass('activ');
                $('.item2').addClass('activ');
//                $('#item3').removeClass('activ');
    });
$('.carousel').carousel({
  interval: 2000
})
    
    $('#tap1').click(function (event) {
        $('.contain-pro').removeClass("selected");
        $('.contain-pro1').addClass("selected");
        $('.contain-pro2').addClass("selected");
    });
    $('#tap2').click(function (event) {
        $('.contain-pro1').removeClass("selected");
        $('.contain-pro').addClass("selected");
        $('.contain-pro2').addClass("selected");
    });
    $('#tap3').click(function (event) {
        $('.contain-pro2').removeClass("selected");
        $('.contain-pro').addClass("selected");
        $('.contain-pro1').addClass("selected");
    });
    $('.procducts ul li a').click(function (event) {
        $(this).addClass('Actived').siblings('.Actived').removeClass('Actived');
    });    
    //  var readMoreHtml = $(".readMore").html();
    //  var lessText = readMoreHtml.substr(0 , 35);
    //    if(readMoreHtml.length <35 || readMoreHtml.length > 100){
    //        $(".readMore").html(lessText).append("<a href='continue.html' target='_blank'>...Continue Reading</a>");
    //    }else{
    //        $(".readMore").html(readMoreHtml);
    //    }    
    $('.owl-carousel').owlCarousel({
        items: 6,
        autoplay: true,
        slideSpeed: 300,
        loop: true,
        responsiveClass: true,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            }
        }
    })
});