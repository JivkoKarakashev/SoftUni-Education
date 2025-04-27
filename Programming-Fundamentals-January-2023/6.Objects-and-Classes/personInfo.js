function personInfo(firstName, lastName, age){

    class Person {
        constructor(fName, lName, age){
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
        }
    }
    let person = new Person(firstName, lastName, age);
    return person;
}

console.log(personInfo("Peter", 
"Pan",
"20"))
console.log('---------------------------------------------------------')
console.log(personInfo("George", 
"Smith",
"18"))