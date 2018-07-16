/**
 * Created by Administrator on 2018/4/19.
 */
//console.log("other");

define(['jquery','lib'],function($,lib){

    return {
        hello:function(name){
            console.log("您好:"+name +"hah!");
        },
        add:function(a,b){
            $(".box").text(a+b);
        },
        say:function(msg){
            lib.say(msg);
        },
        time:function(){
            var num = 0;
            var t;

            function move(){
                if(num == 4){
                    num = 0;
                }else{
                    num += 1;
                }
                $(".box").text(num);
            }


            //t = setInterval(move,1000);
        }

    }
});