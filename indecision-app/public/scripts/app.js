'use strict';

// argument object - no longer bound witgh arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(10, 15));

var user = {
    name: "Saif",
    cities: ['Magura', 'Dhaka', 'Patuakhali'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var that = this;
        // console.log(this.name);
        // console.log(this.cities);
        return this.cities.map(function (city) {
            return _this.name + ' Lives in ' + city;
        });
        // this.cities.forEach( (city) =>{
        //     console.log(this .name + 'has lived in ' + city);
        // });
    }
};
var multiplier = {
    number: [10, 20, 30],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.number.map(function (eachValue) {
            return eachValue * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
