$(function(){
    //nav不同
    $(window).resize(function(){
        var cliew=$(window).width();
        console.log(cliew);
        if(cliew<730){
            $('.content').css('display','none');
            $('.nav-2').css('display','block');
            $('.detail').show();
            $('.yincang').show();
            $('.xianshi').hide();
        }

        else{
            $('.nav-2').css('display','none');
            $('.content').css('display','block');
            $('.detail').hide();
            $('.yincang').hide();
            $('.xianshi').show();
        }

    });

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
            $('header').css({background:'#000'});
            $('.xiala').css({background:'#000'});
            $('.menu-con').css({background:'#000'});
        }else{
            $('header').css({background:'none'});
            $('.xiala').css({background:'none'});
            $('.menu-con').css({background:'none'});
        }
    });
    //技能鼠标悬停
    $('.web-con>div[class|=col]>span').hover(function(){
        $(this).find('.mouseover').css('display','block');
        $(this).find('.mouseover').attr('data-a','animate-fadein');
        $('.skill-con').addClass('skill_d')
    },function(){
        $('.skill-con').removeClass('skill_d')
        $(this).find('.mouseover').attr('data-a','animate-fadeout');
        //$(this).find('.mouseover').css('display','none');
    });
    //about me
    $('.about-me').hover(function(){
        $(this).find('.con').html('    <div  class="aa0" style="background:#5B6F98">精通javascript,可以做出常见的效果</div><div  class="aa1" style="background:#FF0084">精通html,可以做出常见的效果</div> <div  class="aa2"  style="background:#466C96">精通css,可以做出常见的效果</div> <div  class="aa3" style="background:#59C5C6">熟悉jquery,可以熟练运用</div> <div  class="aa4" style="background:#E1584B">熟悉bootstrap,可以熟练运用</div>');

        //$(this).attr('data-a','animate-circle');
        //$('.love  div').attr({'data':'scale'});
        $(this).find('.con').attr('data-a','animate-circle');
        $(this).find('.con>div').attr({'data':'scale'});
//        $(this).attr('data-a','animate-circle');
//        $('.about-me>.con div').attr({'data':'scale'});
//        $('.about-me>.con div').attr({'class':'scale'});
    },function(){
        $(this).find('.con').html('    <div  class="a0" style="background:#5B6F98">精通javascript,可以做出常见的效果</div><div  class="a1" style="background:#FF0084">精通html,可以做出常见的效果</div> <div  class="a2"  style="background:#466C96">精通css,可以做出常见的效果</div> <div  class="a3" style="background:#59C5C6">熟悉jquery,可以熟练运用</div> <div  class="a4" style="background:#E1584B">熟悉bootstrap,可以熟练运用</div>');
        $(this).find('.con').removeAttr('data-a');
        $(this).find('.con>div').removeAttr('data');
        //$('.about-me>.con  div').removeAttr('data');
        //$(this).removeAttr('data-a');
    });

//    轮播
    var index=0;
    $('.yincang div[class|=neng]').hide();
    $('.yincang div[class|=neng]:eq('+index+')').show().attr('data-a','animate-fadein');

    function lunbo(){
        $('.yincang div[class|=neng]').hide();
        $('.btn>div').removeClass('b_active');
        $('.btn>div:eq('+index+')').addClass('b_active');
        $('.yincang div[class|=neng]:eq('+index+')').show().attr('data-a','animate-fadein');
        index++;
        if(index==$('.yincang div[class|=neng]').length){
            index=0;
        }
    }
   var timerId= setInterval(lunbo,2000);
    $('.btn>div').click(function(){
        clearInterval(timerId);
        var i=$(this).index('.btn>div');
        index=i;
        $('.yincang div[class|=neng]').hide();
        $('.btn>div').removeClass('b_active');
        $('.btn>div:eq('+index+')').addClass('b_active');
        $('.yincang div[class|=neng]:eq('+index+')').show().attr('data-a','animate-fadein');
        timerId= setInterval(lunbo,2000);

    });
    $('.yincang div[class|=neng]').hover(function(){
        clearInterval(timerId);
    },function(){
        clearInterval(timerId);
        timerId= setInterval(lunbo,2000);

    });

//---------------------------------
    var aa,bb;
    var aduio=document.getElementById('audio');
    $('.ab-con22').hover(function(){
        $('.ab-con22>div').finish();
        $('.yi').animate({left:200,top:100},2000);
        $('.er').animate({left:200,top:50},2000);

        $('.san').animate({left:150,top:70},2000);
        // $('audio').play();
        $('.si').animate({left:245,top:85},2000);
        $('.wu').animate({left:159,top:125},2000);
        $('.liu').animate({left:215,top:135},2000);
        $('.yi').css('background','rgba('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+',0.5)');
        $('.er').css('background','rgba('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+',0.5)');
        $('.san').css('background','rgba('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+',0.5)');
        $('.si').css('background','rgba('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+',0.5)');
        $('.wu').css('background','rgba('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+',0.5)');
        $('.liu').css('background','rgba('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+',0.5)');
        var bian=function(i){

            return function(){
                shuzu[i].css('transition','all 0.5s ease');
                shuzu[i].css('-webkitTransform','rotateY(90deg)');
                aduio.play();
                setTimeout(function(){
                    // shuzu[i].css('transition','all 0.5s ease');
                    shuzu[i].css('-webkitTransform','rotateY(0deg)');
                },500)
            }
        }
        var shuzu=[$('.yi'),$('.er'),$('.san'),$('.si'),$('.wu'),$('.liu')];
        aa=setTimeout(function(){
            for(var i=0;i<shuzu.length;i++){
                shuzu[i].index=i;
               bb= setTimeout(bian(i),500*(i+1));
            }
        },2000);
    },function(){
        clearTimeout(aa)
        clearTimeout(bb)
        $('.ab-con22>div').finish();
        $('.yi').animate({left:-50,top:-50},2000);
        $('.er').animate({left:50,top:-70},2000);

        $('.san').animate({left:450,top:-70},2000);
        // $('audio').play();
        $('.si').animate({left:-100,top:270},2000);
        $('.wu').animate({left:450,top:270},2000);
        $('.liu').animate({left:200,top:400},2000);

    });
//顶部

    $('.huojian').hide();
    //var h_kai=false;
    $(window).scroll(function(){
        if($(window).scrollTop()>500){

            $('.huojian').show();

        }else{

            $('.huojian').hide();




        }
        //if($(window).scrollTop()>600){
        //    //h_kai
        //    if(h_kai){
        //        return;
        //    }
        //    $('.huojian').show();
        //    $('.huojian').attr('data-a','bianda');
        //    h_kai=true;
        //
        //
        //}else{
        //    h_kai=false;
        //    $('.huojian').attr('data-a','bianxiao');
        //    setTimeout(function(){
        //        $('.huojian').hide();
        //    },1000)
        //
        //}
    })
    //$('.huojian').hover(function(){
    //    $(this).css({boxShadow:'0 0 10px blue'})
    //});
    $('.huojian').click(function(){
        $({t:$(window).scrollTop()}).animate({t:0},{
            duration:700,
            step:function(){
                $(window).scrollTop(this.t);
            }
        })
    });
   //=====================
    var shudu=1;
    var start=Number($('.bott').css('marginLeft').slice(0,-2));
    var mm=start;
    var fn=function(){
        start+=shudu;
        console.log();
        if(shudu>0&&start>=0){
            start=0;
            clearInterval(count)
        }

        if(shudu<0&&-start>$('.dw').width()-clientW-mm*2){
            start=-($('.dw').width()-clientW-mm*2);
            clearInterval(count)
        }
        $('.bott').css('marginLeft',start+'px')
    }
    var count;
    $('.yg').hover(function(){
         shudu=1;
        console.log(start);
        count=setInterval(fn,1)

    },function(){
        clearInterval(count)
    })
    var clientW=$(window).width();
    $('.zg').hover(function(){
         shudu=-1
        console.log(start);
        count=setInterval(fn,1)

    },function(){
        clearInterval(count)
    })
    $('.zg').hide();
    $('.yg').hide();
    $(window).scroll(function(){
        if(document.body.scrollTop>2000){
            $('.zg').show();
            $('.yg').show();
        }else{
            $('.zg').hide();
            $('.yg').hide();
        }
    });


//

    $('.kuai').hover(function(){
        $(this).find('span').attr('class','bounce')
    },function(){
        $(this).find('span').removeAttr('class')
    });

























});