function schoolRegister(inputArray) {

    const schoolRegister = {};
    const nextGradeRegister = {};

    class Student {
        constructor(name, nValue, grade, gValue, score, sValue) {
            this[name] = nValue;
            this[grade] = gValue;
            this[score] = sValue;
        }
    }

    for (let el of inputArray) {
        let [studentInfo, gradeInfo, scoreInfo] = el.split(', ')
        let [keyName, nameValue] = studentInfo.split(': ');
        let [keyGrade, gradeValue] = gradeInfo.split(': ');
        let [keyScore, scoreValue] = scoreInfo.split(': ');
        gradeValue = Number(gradeValue);
        scoreValue = Number(scoreValue);
        let newStudent = new Student(keyName, nameValue, keyGrade, gradeValue, keyScore, scoreValue);
        if (schoolRegister.hasOwnProperty(gradeValue)) {
            schoolRegister[gradeValue].push(newStudent);
        } else {
            schoolRegister[gradeValue] = [];
            schoolRegister[gradeValue].push(newStudent);
        }
    }

    let orderedKeysArr = Object.keys(schoolRegister).sort((a, b) => a - b);

    const orderedSchoolRegister = {};
    orderedKeysArr.forEach(element => {
        orderedSchoolRegister[element] = schoolRegister[element];
    });
    // console.log(orderedSchoolRegister)
    for (const key in orderedSchoolRegister) {
        orderedSchoolRegister[key].forEach(el => {
            if (el['Graduated with an average score'] >= 3) {
                if (nextGradeRegister.hasOwnProperty(Number(key) + 1)) {
                    nextGradeRegister[Number(key) + 1].push(el);
                } else {
                    nextGradeRegister[Number(key) + 1] = [];
                    nextGradeRegister[Number(key) + 1].push(el);
                }
            }
        });
    }
    // console.log(nextGradeRegister)
    for (let key in nextGradeRegister) {
        // console.log(nextGradeRegister[key])
        let nextGrade = key;
        let listOfSrudents = nextGradeRegister[key].reduce((acc, el) => acc += `${el['Student name']}, `,'');
        let listOfSrudentsLength = listOfSrudents.length;
        listOfSrudents = listOfSrudents.slice(0, listOfSrudentsLength - 2);
        let sumNextGradeScore = nextGradeRegister[key].reduce((acc, el) => acc += el['Graduated with an average score'], 0);
        let avgScore = (sumNextGradeScore / nextGradeRegister[key].length);
        console.log(`${nextGrade} Grade\nList of students: ${listOfSrudents}\nAverage annual score from last year: ${avgScore.toFixed(2)}`)
        console.log()
    }
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])