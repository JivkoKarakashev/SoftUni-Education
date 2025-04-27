function bonusScoringSystem(inputArray) {

    inputArray = inputArray.map(x => Number(x));
    let maxAttendaces = 0;
    let maxTotalBonus = 0;    
    let studenstLecturesBonusArray = inputArray.splice(0, 3);
    let [students, lectures, bonus] = [...studenstLecturesBonusArray];
        
    for (let i = 0; i < students; i++){
        let currStudentAttendances = inputArray[i];
        let currStudentTotalBonus = currStudentAttendances / lectures * (5 + bonus);    
        if (currStudentTotalBonus > maxTotalBonus){
            maxTotalBonus = currStudentTotalBonus;
            maxAttendaces = currStudentAttendances;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxTotalBonus)}.`)
    console.log(`The student has attended ${maxAttendaces} lectures.`)
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])
console.log('------------------------------------')
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])
// console.log('------------------------------------')
// bonusScoringSystem([
//     '2', '10', '5',
//     '1',
//     // 'a',
//     // '10'
// ])