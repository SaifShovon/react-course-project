//setup constructor to take name and age (default to 0)
//getDescription - Saif Shovon is 26 year old
class Person {

    constructor(name = 'Annonymous',age = 0){
        this.name = name;
        this.age = age;
     }

    getGretting(){
       return `Hi. I am ${this.name}! `;
    }
    getDescription(){
        return ` ${this.name} is ${this.age} year's old.`;
    }
}

class Student extends Person{
        constructor(name,age,major = "CSE"){
                super(name,age);
                this.major = major;
        }
        hasMajor(){
                return !!this.major;
        }

        getDescription(){
                let description = super.getDescription();
                if(this.hasMajor()){
                        description += ` His Major is ${this.major}`;
                }
                return description;
        }
}

class Traveller extends Person{
        constructor(name,age,homeLocations){
                super(name,age);
                this.homeLocations = homeLocations;
        }

        getGretting(){
                let gretting = super.getGretting();
                if(this.homeLocations){
                        gretting += `I am visiting from ${this.homeLocations}`;
                }
                return gretting;
        }
}

const me = new Student('Saif Shovon');
console.log(me.getGretting());

const other = new Student("saif shovon",26,"BBA");
console.log(other.getDescription());

const traveller = new Traveller("saif shovon",26,"Magura");
console.log(traveller.getGretting());