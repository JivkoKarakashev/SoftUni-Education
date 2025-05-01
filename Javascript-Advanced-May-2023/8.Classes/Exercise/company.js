function company() {
    class Company {
        #avgSalaryObj = {};
        #bestDepartment;
        #averageSalary;
        #bestDepEmployeesArr = [];

        constructor() {
            this.departments = {};
        }

        bestDepartmentSort() {
            const arrDeps = Object.entries(this.#avgSalaryObj);
            arrDeps.sort((depA, depB) => depB[1].averageSalary - depA[1].averageSalary);
            this.#bestDepartment = arrDeps[0][0];
            this.#averageSalary = arrDeps[0][1].averageSalary;
            const arrEmpl = Object.entries(this.departments[this.#bestDepartment]);
            arrEmpl.sort((emplA, emplB) => {
                if (emplA[1].salary == emplB[1].salary) {
                    return emplA[1].name.localeCompare(emplB[1].name);
                } else {
                    return emplB[1].salary - emplA[1].salary;
                }
            });
            this.#bestDepEmployeesArr = arrEmpl;
        }
        addEmployee(name, salary, position, department) {
            if (!name || !salary || !position || !department) {
                throw new Error('Invalid input!');
            }
            salary = Number(salary);
            if (salary < 0) {
                throw new Error('Invalid input!');
            }
            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = [];
                this.#avgSalaryObj[department] = {};
                this.#avgSalaryObj[department]['totalSalaries'] = 0;
                this.#avgSalaryObj[department]['salariesCount'] = 0;
                this.#avgSalaryObj[department]['averageSalary'] = 0;
            }
            this.departments[department].push({ name, salary, position });
            this.#avgSalaryObj[department]['totalSalaries'] += salary;
            this.#avgSalaryObj[department]['salariesCount']++;
            this.#avgSalaryObj[department]['averageSalary'] = this.#avgSalaryObj[department]['totalSalaries'] / this.#avgSalaryObj[department]['salariesCount'];
            this.bestDepartmentSort();
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
        bestDepartment() {
            // console.log(this.#bestDepEmployeesArr);
            const emplsArr = [];
            for (let empl of this.#bestDepEmployeesArr) {
                emplsArr.push([`${empl[1].name} ${empl[1].salary} ${empl[1].position}`]);
            }
            return `Best Department is: ${this.#bestDepartment}\nAverage salary: ${this.#averageSalary.toFixed(2)}\n${emplsArr.join('\n')}`
        }
    }

    let c = new Company();
    c.addEmployee("Stanimir", 2000, "engineer", "Construction");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 2000, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    // console.log(c);
    console.log(c.bestDepartment());
    console.log('-----------------------------');
    // let c = new Company();
    // c.addEmployee(undefined, 2000, "engineer", "Construction");
}

company()