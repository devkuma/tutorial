var myapp = angular.module('myapp',[]);
var helo = myapp.controller('HeloController',
    function(){
        this.count = 0;
        this.data = [
            {id:0,name:'no data',price:0,get:false,date:1450100000000},
            {id:1,name:'Android phone',price:7800,get:true,date:1450400000000},
            {id:2,name:'New iPhone',price:549020,get:false,date:1450200000000},
            {id:3,name:'windows phone',price:38765,get:true,date:1450300000000}
        ];
        this.getData = function(){
            return this.data[this.count].id + ': ' + 
                this.data[this.count].name + ', ' + 
                this.data[this.count].price + '.' +
                this.data[this.count].date;
        };
    }
);

helo.filter('getIt', 
    function(){
        return function(val) {
            return val ? "✔" : "－";
        };
    }
);