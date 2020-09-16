
jQuery(".men1").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec4").offset().top -90
    }, 400);
});
jQuery(".men2").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec3").offset().top -90
    }, 400);
});
jQuery(".men3").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec9").offset().top -90
    }, 400);
});
jQuery(".men4").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec7").offset().top -90
    }, 400);
});
jQuery(".men5").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec5").offset().top -90
    }, 400);
});
jQuery(".men6").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec10").offset().top -90
    }, 400);
});

jQuery(".totop").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec1").offset().top -90
    }, 400);
});

jQuery('#mobile-menu li').click(function(){
    jQuery('#mobile-menu').toggleClass('show_mobile_menu')
    jQuery('#burger-menu').toggleClass('active')
});




$(document).ready(function() {
    $('.bx-slider1').bxSlider({
        controls: false,
    });
    $('.bx-slider2').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 427,
        slideMargin: 31,
        moveSlides: 1,
        controls: false,
    });
    $('.bx-slider3').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        controls: false,
        // Mode: 'fade',
    });
});

// var viewportWidth = $(window).width();

// if (viewportWidth < 767) {
//     $('.bx-slider2').bxSlider({
//         minSlides: 1,
//         maxSlides: 2,
//         slideWidth: 280,
//         slideMargin: 31,
//         moveSlides: 1,
//         controls: false,
//     });
// };






var burgerCtr = document.querySelector("#burger-menu");
var menuCtr = document.querySelector("#mobile-menu");
burgerCtr.addEventListener("click", function() {
    this.classList.toggle("active");
    menuCtr.classList.toggle("show_mobile_menu");
});

// скрипт табов //
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
// скрипт табов //

$('.slider2-1').click(function(){
    $('.sld2').removeClass('active');
    $(this).addClass('active');
    $('.slider_block2').toggleClass('slider-active');
});
$('.slider2-2').click(function(){
    $('.sld2').removeClass('active');
    $(this).addClass('active');
    $('.slider_block2').toggleClass('slider-active');
});