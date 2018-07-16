(function(win,doc,$){

    Obj = function (json) {
        this.name = json.name,
            this.age = json.age,
            this.Hello = function () {
                alert(this.name);
            }

    }

})(window,document,$)

// $(function(){

//     text = function (con){
//         alert(con);

//     }
// })