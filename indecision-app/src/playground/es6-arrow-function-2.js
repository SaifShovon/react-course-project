// argument object - no longer bound witgh arrow functions

const add = (a,b) =>{
    //console.log(arguments);
    return a+b;
};
console.log(add(10,15));

const user = {
    name : "Saif",
    cities : ['Magura','Dhaka','Patuakhali'],
    printPlacesLived (){
        const that = this;
        // console.log(this.name);
        // console.log(this.cities);
       return this.cities.map((city) => this.name + ' Lives in '+ city);
        // this.cities.forEach( (city) =>{
        //     console.log(this .name + 'has lived in ' + city);
        // });
    },
};
const multiplier = {
    number : [10,20,30],
    multiplyBy : 5,
    multiply (){
        return this.number.map((eachValue) => eachValue * this.multiplyBy);
    }
};

console.log(multiplier.multiply());