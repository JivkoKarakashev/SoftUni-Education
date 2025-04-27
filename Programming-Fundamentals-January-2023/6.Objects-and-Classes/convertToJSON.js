function convertToJSON(firstName, lastName, hairColor){

    class personInfo {
        constructor(fstName, lstName, hairClr){
            this.name = fstName;
            this.lastName = lstName;
            this.hairColor = hairClr;
        }
    }

    let person = new personInfo(firstName, lastName, hairColor);
    let personObjStringify = JSON.stringify(person);
    return personObjStringify;
}

console.log(convertToJSON('George', 'Jones', 'Brown'))
console.log('-----------------------------------------------------')
console.log(convertToJSON('Peter', 'Smith', 'Blond'))