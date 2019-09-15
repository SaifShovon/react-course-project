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
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach(function (city) {
            console.log(_this.name + 'has lived in ' + city);
        });
    }
};

user.printPlacesLived();
