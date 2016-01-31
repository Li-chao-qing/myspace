/**
 * Created by lenovo on 2016/1/28.
 */
$(function(){
    var x= $('.p_er>div:eq(0)').width()/2;
    $('.p_er').css({marginLeft:x})
    var cliew=$(window).width();
    if(cliew<1100){
        $('.p_er').css({marginLeft:0})
    }
    $(window).resize(function(){

        var cliew=$(window).innerWidth();
        var x= $('.p_er>div:eq(0)').width()/2;
        $('.p_er').css({marginLeft:x})
        if(cliew<1100){
            x=0;
            $('.p_er').css({marginLeft:x})
        }
    });
    $('.fangda div[class="p_zhong"]').html('<div class="mask"></div>');
    $('.mask').css({background:'rgba(0,0,0,0.5)',width:'100%',height:'100%','display':'none','webkitTransition':'display 2s ease'})
    $('.fangda>div[class|=col]').hover(function(){
        $(this).attr('data-a','animate-circle1');
        var index=$(this).find('.p_zhong').index('.p_zhong');
//alert(index)
        $('.mask:eq('+index+') ').css({'display':'block'})

    },function(){
        $(this).removeAttr('data-a');
        $('.mask').css({'display':'none'})
    });
    $('.row>div[class|=col]').attr('data-a','animate-circle1');

    var kaiguan=false;
    var p_index;
    $('.fangda>div[class|=col]').click(function(){
        //$('.zjj').hide();
        p_index=$(this).index('.fangda>div[class|=col]');

        var src=$(this).find('.p_zhong').css('background')
        var x=src.split(' ');
        var v=x[3]
        /*url()*/
        var length=v.length;
        var start=v.indexOf('/img');
        var result=v.slice(start,length-1);
        console.log(result);
        $('<div>').appendTo('body').css({
            position:'fixed',
            width:$(window).width(),
            height:$(window).height(),
            left:0,top:0,
            background:'rgba(0,0,0,0.5)'

        }).attr('class','qingc');
        $('<div>').appendTo('.qingc').css({
            width:'50%',
            height:'70%',
            position:'absolute',
            left:0,right:0,top:0,bottom:0,margin:'auto',
            background:src,
            boxShadow:'0 0 20px #000'

        }).attr('class','zzyy');
        $('<div>').appendTo('.zzyy').css({
            width:'50px',
            height:'50px',
            borderRadius:'50%',position:'absolute',
            left:-30+'%',
            top:'45%'
        }).attr('class',' iconfont icon-xiangzuo p_left');
        $('<div>').appendTo('.zzyy').css({
            width:'50px',
            height:'50px',
            borderRadius:'50%',position:'absolute',
            right:-30+'%',
            top:'45%'
        }).attr('class','iconfont icon-xiangyou p_right ');
        $('<div>').appendTo('.zzyy').css({
            width:'50px',
            height:'50px',
            borderRadius:'50%',position:'absolute',
            right:'-10%',
            top:'-10%'
        }).attr('class','iconfont   icon-shurukuangshanchuneironganniu  p_close');
        $('<a>').appendTo('.zzyy').css({
            //background:'blue',
            //borderRadius:'50%',
            position:'absolute',
            right:'10%',
            top:'45%'
        }).attr('class', 'xiaz').text('下载').attr('href','.'+result);
        //<a href="./img/niao-d.png" >download</a>
         kaiguan=true;

    })
    //alert(1);
    $('html').mousemove(function(){
        if(kaiguan){
            if($(window).innerWidth()<730){
                $('.xiaz').remove();
            }
            $('.p_close').click(function(){
                //console.log(1);
                //$('.zjj').show();
                $('.qingc').remove()
            });
            $('.p_right').click(function(){
                p_index++;
                if(p_index==$('.p_zhong').length){
                    p_index=0;
                }
                var src=$('.p_zhong:eq('+p_index+')').css('background');
                var x=src.split(' ');
                var v=x[3]
                /*url()*/
                var length=v.length;
                var start=v.indexOf('/img');
                var result=v.slice(start,length-1);
                $('.zzyy').css({background:src})
                $('.xiaz').attr('href','.'+result);
            });
            $('.p_left').click(function(){
                p_index--;
                if(p_index<0){

                    p_index=$('.p_zhong').length-1;
                }
                var src=$('.p_zhong:eq('+p_index+')').css('background');
                var x=src.split(' ');
                var v=x[3]
                /*url()*/
                var length=v.length;
                var start=v.indexOf('/img');
                var result=v.slice(start,length-1);
                $('.zzyy').css({background:src})
                $('.xiaz').attr('href','.'+result);
            });
            kaiguan=false;
        }
    });
    $('<div>').appendTo('.mask').attr('class','zjj').css({
        //position:'relative',zIndex:999
        display:'none'
    });
    $('.mask').hover(function(){
        var i=$(this).index('.mask');
        //alert(i);
        $('.zjj:eq('+i+')').addClass('iconfont').addClass('icon-neirongfenfawangluocdn').css({color:'#fff',display:'block','font-size':'20px'});
    },function(){
        $('.zjj').removeClass('iconfont').removeClass(' icon-neirongfenfawangluocdn');
    });
    //.attr('class','iconfont  icon-neirongfenfawangluocdn').css({
    //    //width:'100%',
    //    //'height':'250px',
    //    'font-size':'20px','text-align':'center','line-height':'12'
    //})
    //$(window).scrollTop()
    //console.log($('<div>'));

});