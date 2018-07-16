(function(){
    // console.log("js");
    function Self(obj) {
        // console.log(obj);
        this.name = "ysm";
        this.age = "22";
        this.hello = function () {
            return "Hello everyone, My name is " + this.name + " and my age is a secrect,heihei";
        };
        this.init();
    };
    Self.prototype.init = function () {
        console.log(this.age);
    }
    var self = new Self();
})()