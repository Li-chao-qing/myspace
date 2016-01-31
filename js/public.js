$(function() {

    //nav不同
    $(window).resize(function () {
        var cliew = $(window).width();
        console.log(cliew);
        if (cliew < 730) {
            $('.content').css('display', 'none');
            $('.nav-2').css('display', 'block');

        }

        else {
            $('.nav-2').css('display', 'none');
            $('.content').css('display', 'block');

        }

    });

    $(window).resize();
//    nav下拉
    $('.xiala').click(function () {
        $('.menu-con').slideToggle();
    });
});