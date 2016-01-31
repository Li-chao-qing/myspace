/**
 * Created by lenovo on 2016/1/28.
 */
$(function(){
    //nav不同
    $(window).resize(function(){
        var cliew=$(window).width();
        console.log(cliew);
        if(cliew<730){
            $('.content').css('display','none');
            $('.nav-2').css('display','block');
            $('.detail').show();
        }

        else{
            $('.nav-2').css('display','none');
            $('.content').css('display','block');
            $('.detail').hide();
        }

    });

    $('header').css({background:'#000'});
    $(window).resize();
//    nav下拉
    $('.xiala').click(function(){
        $('.menu-con').slideToggle();
    });
//    3d轮播
//    setTimeout(function(){
//        var bigScene=$('<div>');
//        bigScene.css({
//            'max-width':'800px',
//            width:'100%',
//            height:'100%',
//            //border:'1px solid red',
//            position:'absolute',
//            left:0,right:0,top:0,bottom:0,margin:'auto'
//
//        }).appendTo('.lunb');
//        var num=4;
//        var arr=[];
//        for(var i=0;i<num;i++){
//
//            var scene=$('<div>');
//            scene.css({
//                width:'80%',
//                height:100/num+'%',
//                //border:'1px solid black',
//                perspective:'5000px'
//            }).appendTo(bigScene);
//            var box=$('<div>');
//            box.css({
//                width:'100%',
//                height:'100%',position:'relative',
//                transition:'all 2s ease '+i*0.1+'s',
//                transformOrigin:'center center 200px',
//                transformStyle:'preserve-3d'
//            }).appendTo(scene);
//            arr.push(box);
//            for(var j=0;j<6;j++){
//                var panel=$('<div>');
//                panel.css({
//
//                    position:'absolute',
//                    left:0,top:0
//                }).appendTo(box);
//                if(j==0){//shang
//                    panel.css({
//                        transform:'rotateX(90deg)',
//                        transformOrigin:'top',
//                        width:'100%',
//                        height:'400px'
//                    });
//                }else if(j==1){
//                    //zuo
//                    panel.css({
//                        transform:'rotateY(-90deg)',
//                        transformOrigin:'left',
//                        width:'400px',
//                        height:'100%',
//                        background:'url(img/yy.jpg) no-repeat 0 '+(-i*400/num)+'px '
//                    });
//                }else if(j==2){
//                    //you
//                    panel.css({
//
//                        left:'50%',
//                        width:'400px',
//                        height:'100%',
//                        transform:'rotateY(90deg)',
//                        transformOrigin:'right',
//                        background:'url(img/xx.jpg) no-repeat 0 '+(-i*400/num)+'px '
//                    });
//                }else if(j==3){
//                    //xia
//                    panel.css({
//                        transform:'rotateX(-90deg)',
//                        transformOrigin:'bottom',
//
//                        width:'100%',
//                        height:'400px'
//                    });
//                }
//                else if(j==4){
//                    //hou
//                    panel.css({
//
//                        bottom:0,
//                        width:'100%',
//                        height:'100%',
//                        transform:'rotateY(-180deg)',
//                        background:'url(img/dd.jpg) no-repeat 0 '+(-i*400/num)+'px '
//                    });
//                }
//                else if(j==5){
//                    panel.css({
//
//
//                        width:'100%',
//                        height:'100%',
//                        transform:'translateZ(400px)',
//                        background:'url(img/mm.jpg) no-repeat 0 '+(-i*400/num)+'px '
//                    });
//                }
//            }
//        }
//        var a=0;
//        function ff(){
//            a+=90;
//            for(var i=0;i<arr.length;i++){
//
//                arr[i].css({
//                    transform:'rotateY('+a+'deg)'
//                });
//            }
//        }
//        var t=setInterval(ff,4000);
//        window.onblur=function(){
//            clearInterval(t);
//        }
//        window.onfocus=function(){
//            t=setInterval(ff,4000);
//        }
//    },2000)
//    $('.love').hover(function(){
//        $(this).attr('data-a','animate-circle');
//        $('.love  div').attr({'data':'scale'});
//    },function(){
//
//        $('.love  div').removeAttr('data');
//        $(this).removeAttr('data-a');
//    });
    //love
    //滚动
    $(window).scroll(function() {
        if($(window).scrollTop()>80){

            //$('.xiala').css({background:'#000'});
            $('.menu-con').css({background:'#000'});
        }else{
            //$('header').css({background:'none'});
            //$('.xiala').css({background:'none'});
            $('.menu-con').css({background:'none'});
        }
    });


});