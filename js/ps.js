$(function(){
    //var bigScene=$('<div>');
    //bigScene.css({
    //    width:'800px',
    //    height:'400px',
    //    border:'1px solid red',
    //    position:'fixed',
    //    left:0,right:0,top:0,bottom:0,margin:'auto'
    //
    //}).appendTo('body');
    //var num=10;
    //var arr=[];
    //for(var i=0;i<num;i++){
    //
    //    var scene=$('<div>');
    //    scene.css({
    //        width:'100%',
    //        height:100/num+'%',
    //        border:'1px solid black',
    //        perspective:'5000px'
    //    }).appendTo(bigScene);
    //    var box=$('<div>');
    //    box.css({
    //        width:'100%',
    //        height:'100%',position:'relative',
    //        transition:'all 2s ease '+i*0.1+'s',
    //        transformOrigin:'center center 200px',
    //        transformStyle:'preserve-3d'
    //    }).appendTo(scene);
    //    arr.push(box);
    //    for(var j=0;j<6;j++){
    //        var panel=$('<div>');
    //        panel.css({
    //
    //            position:'absolute',
    //            left:0,top:0
    //        }).appendTo(box);
    //        if(j==0){//shang
    //            panel.css({
    //                transform:'rotateX(90deg)',
    //                transformOrigin:'top',
    //                width:'100%',
    //                height:'400px'
    //            });
    //        }else if(j==1){
    //            //zuo
    //            panel.css({
    //                transform:'rotateY(-90deg)',
    //                transformOrigin:'left',
    //                width:'400px',
    //                height:'100%',
    //                background:'url(img/yy.jpg) no-repeat 0 '+(-i*400/num)+'px '
    //            });
    //        }else if(j==2){
    //            //you
    //            panel.css({
    //
    //                left:'400px',
    //                width:'400px',
    //                height:'100%',
    //                transform:'rotateY(90deg)',
    //                transformOrigin:'right',
    //                background:'url(img/xx.jpg) no-repeat 0 '+(-i*400/num)+'px '
    //            });
    //        }else if(j==3){
    //            //xia
    //            panel.css({
    //                transform:'rotateX(-90deg)',
    //                transformOrigin:'bottom',
    //
    //                width:'100%',
    //                height:'400px'
    //            });
    //        }
    //        else if(j==4){
    //            //hou
    //            panel.css({
    //
    //                bottom:0,
    //                width:'100%',
    //                height:'100%',
    //                transform:'rotateY(-180deg)',
    //                background:'url(img/dd.jpg) no-repeat 0 '+(-i*400/num)+'px '
    //            });
    //        }
    //        else if(j==5){
    //            panel.css({
    //
    //
    //                width:'100%',
    //                height:'100%',
    //                transform:'translateZ(400px)',
    //                background:'url(img/mm.jpg) no-repeat 0 '+(-i*400/num)+'px '
    //            });
    //        }
    //    }
    //}
    //var a=0;
    //function ff(){
    //    a+=90;
    //    for(var i=0;i<arr.length;i++){
    //
    //        arr[i].css({
    //            transform:'rotateY('+a+'deg)'
    //        });
    //    }
    //}
    //var t=setInterval(ff,4000);
    //window.onblur=function(){
    //    clearInterval(t);
    //}
    //window.onfocus=function(){
    //    t=setInterval(ff,4000);
    //}

//alert(1)
    ///
    $('.zhuan').hover(function(){
        $(this).attr('data-a','animate-circle1');
    },function(){
        $(this).removeAttr('data-a');
    });
});