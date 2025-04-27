function schoolGrades(inputArray) {

    const studentsGradesListObj = {};

    inputArray.forEach(el => {
        let [stdName, ...stdGrades] = el.split(' ');
        if (!studentsGradesListObj.hasOwnProperty(stdName)){
            studentsGradesListObj[stdName] = [];
        }
        for (let currGrade of stdGrades) {
            studentsGradesListObj[stdName].push(currGrade);
        }
    });
    // console.log(studentsGradesListObj)

    const studentsGradesListArr =  Object.entries(studentsGradesListObj);
    studentsGradesListArr.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
    // console.log(studentsGradesListArr);

    studentsGradesListArr.forEach(el=> {
        let [stdName, stdGrades] = [...el];
        let gradesCount = stdGrades.length;
        stdGrades = stdGrades.map(Number);
        let sumGrades = stdGrades.reduce((acc, curr) => acc += curr, 0);
        let avgSumGrades = sumGrades / gradesCount;
        console.log(`${stdName}: ${avgSumGrades.toFixed(2)}`);
    });
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])
console.log('------------');
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])