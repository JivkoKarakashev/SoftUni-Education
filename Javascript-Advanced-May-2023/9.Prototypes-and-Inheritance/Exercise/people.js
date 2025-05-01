function people() {

    class Employee {
        tasks = [];
        _salary = 0;
        currTaskIdx = 0;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        get salary() {
            return this._salary;
        }

        set salary(value) {
            this._salary = value;
        }

        work() {
            console.log(this.tasks[this.currTaskIdx]);
            const lastIdx = this.tasks.length - 1;
            if (this.currTaskIdx === lastIdx) {
                this.currTaskIdx = 0;
                return;
            }
            this.currTaskIdx++;
        }

        collectSalary() {
            console.log(`${this.name} received ${this._salary} this month.`);
        }
    }

    class Junior extends Employee {
        tasks = [
            `${this.name} is working on a simple task.`
        ];

        constructor(name, age) {
            super(name, age);
        }
    }

    class Senior extends Employee {
        tasks = [
            `${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`
        ];

        constructor(name, age) {
            super(name, age);
        }
    }

    class Manager extends Employee {
        dividend = 0;
        tasks = [
            `${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`
        ];

        constructor(name, age) {
            super(name, age);
        }

        collectSalary() {
            super.collectSalary;
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

// <--------------Junior-------------> //
console.log('<--------------Junior------------->');
const classes = people();
const junior = new classes.Junior('Ivan', 25);
junior.work();
junior.work();
junior.salary = 5811; junior.collectSalary();
// <--------------Senior-------------> //
console.log('<--------------Senior------------->');
const sinior = new classes.Senior('Alex', 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
// <--------------Manager-------------> //
console.log('<--------------Manager------------->');
const manager = new classes.Manager('Tom', 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();