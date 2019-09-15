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
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach( (city) =>{
            console.log(this .name + 'has lived in ' + city);
        });
    },
};

user.printPlacesLived();