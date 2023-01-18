$(function () {
    $('.menu_bar').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('h1').toggleClass('on');
    });

    $('.header .right a').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $('.header .right a').toggleClass('on');
    });


    var lastScrollTop = 0, delta = 5;

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        // if (Math.abs(lastScrollTop - st) <= delta) return;

        if (sct > lastScrollTop && (lastScrollTop > 0)) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        };
        lastScrollTop = sct;

        if (sct > 100) {
            $('.header').addClass('bg');
        } else {
            $('.mainH').removeClass('bg');
        }
    });

    $('.scrolldown a').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 1000);
    })

    // main visual : scroll down

    $('.main_product_slide').on('init afterChange', function (event, slick, currentSlide) {
        var current = $('.main_product_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_product_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    //main product slide

    $('.mainTechnology ul li').mouseenter(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });

    $(window).on('scroll', function () {
        var sct = $(this).scrollTop();
        if (sct > 500) {
            $('.toTop').addClass('on');
        } else {
            $('.toTop').removeClass('on');
        }
    });

    $('.toTop').on('click', function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 600)
    });
});
// //////// main script ////////////////

$(function () {
    $('.itm_slide').slick({
        arrows: false,
        dots: true,
    });
});