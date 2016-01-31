$(function(){

    //nav不同
    $(window).resize(function(){
        var cliew=$(window).width();
        console.log(cliew);
        if(cliew<730){
            $('.content').css('display','none');
            $('.nav-2').css('display','block');

        }

        else{
            $('.nav-2').css('display','none');
            $('.content').css('display','block');

        }

    });

    $(window).resize();
//    nav下拉
    $('.xiala').click(function(){
        $('.menu-con').slideToggle();
    });










    //////////////////////
    var clientW=$(window).width();
    var clientH=$(window).height();
    var box=$('.box');
    var boxW=box.width();
    var boxH=box.height();
    box.css({
        left:-(boxW-clientW)/2,
        top:-(boxH-clientH)/2,
        transform:'scale(0,0)'
    });
    var bx=(boxW+20-clientW)/clientW;
    var by=(boxH+20-clientH)/clientH;
    setTimeout(function(){
        box.css({
            webkitTransition:'all 3s ease',
        webkitTransform:'scale(1,1)'
        });
    },0);
    var px,py;
    box.mousemove(function(e){
        px= e.clientX;
        py= e.clientY;

    });
    setInterval(function(){
        box.css({
            left:-px*bx,
            top:-py*by,
            transition:'left 0.5s,top 0.5s'
        });
    },500);


});