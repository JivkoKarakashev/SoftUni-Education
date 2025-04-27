function employees(inputArray){

    class Employee{
        constructor(name, idNumber){
            this.name = name;
            this.idNumber = idNumber;
        }
        print(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.idNumber}`)
        }
    }

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++){
        let emplName = inputArray[i];
        let emplIdNumber = emplName.length;
        let newEmployee = new Employee(emplName, emplIdNumber);
        newEmployee.print();
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
console.log('-------------------------------------------')
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])