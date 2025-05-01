class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(string) {
        const fullNameArr = string.split(' ');
        if (fullNameArr.length !== 2) {
            return;
        }
        const [firstName, lastName] = fullNameArr;
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

let person = new Person("Albert", "Simpson");
let actual = person.fullName;
let expected = "Albert Simpson";
console.log(`true === ${actual === expected}`);
console.log('<----------->');
person.firstName = 'Simon';
let actualFullName = person.fullName;
let expectedFullName = "Simon Simpson";
console.log(`true === ${actualFullName === expectedFullName}`);
console.log('<----------->');
person.fullName = "Peter";
let actualFirstName = person.firstName;
let expectedFirstName = "Simon"
console.log(`true === ${actualFirstName === expectedFirstName}`);
console.log('<----------->');
let actualLastName = person.lastName;
let expectedLastName = "Simpson";
console.log(`true === ${actualLastName === expectedLastName}`);
console.log('<----------->');