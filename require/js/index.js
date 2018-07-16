/**
 * Created by Administrator on 2018/4/19.
 */
requirejs.config({
    bathUrl:"js",
    //shim: {
    //    calendar: ['jquery']
    //},
    paths:{
        jquery:'jquery.min'
    },
    //urlArgs: 'ver=6.5'
});
requirejs(['jquery','other'],function($,other){
    //console.log($);
    other.hello("杨淑敏");
    //other.add(23,56);
    other.say("wshcfiwbf");
    other.time();
});