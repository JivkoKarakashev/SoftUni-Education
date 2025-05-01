function demo() {

    const person = {
        firstName: 'Peter',
        lastName: 'Johnson',
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    };
    console.log(person.fullName());

    const getFullName = person.fullName;
    console.log(getFullName());

    const anotherPerson = {
        firstName: 'Bob',
        lastName: 'Smith'
    };
    anotherPerson.fullName = getFullName;
    console.log(anotherPerson.fullName());
    console.log(anotherPerson);
}

demo()