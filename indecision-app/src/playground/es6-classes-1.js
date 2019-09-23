//setup constructor to take name and age (default to 0)
//getDescription - Saif Shovon is 26 year old
class Person {
    // constructor(name = 'Annonymous'){
    //     this.name = name;
    // }

    constructor(name = 'Annonymous',age = 0){
            this.name = name;
            this.age = age;
     }

    getGretting(){
       // return "Hi.."+ this.name + '!!';
       return `Hi. I am ${this.name}! `;
    }
    getDescription(){
            // return "Hi.."+ this.name + '!!';
            return ` ${this.name} is ${this.age} year's old`;
    }
}

const me = new Person('Saif Shovon');
console.log(me.getGretting());

const other = new Person("saif shovon",26);
console.log(other.getGretting());
 console.log(other.getDescription());