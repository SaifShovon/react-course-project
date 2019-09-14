var nameVar = 'Saif';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet = 'Shovon';
nameLet = 'Hossain';

console.log('nameVar',nameLet);

const nameConst = 'Noman';
console.log('nameVar',nameConst);

function getPetName(){
    const petName = 'Kalu';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block Scoping

var fullName = 'Saif Shovon';
if(fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
