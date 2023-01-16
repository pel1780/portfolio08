$(function () {
    $('.menu_bar').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('h1').toggleClass('on');
    });

    $('.main_product_slide').slick({});
})