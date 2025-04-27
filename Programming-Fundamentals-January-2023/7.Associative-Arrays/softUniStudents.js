function softUniStudents(inputArray) {

    const sortByStudentsCount = (studentsArr) => {
        return studentsArr.sort((courseA, courseB) => courseB[1].length - courseA[1].length);
    }
    const sortByStudentCredits = (studentsArr) => {
        for (let courseArr of studentsArr) {
            courseArr[1].sort((studentA, studentB) => studentB[0] - studentA[0]);
        }
    }

    const courseObject = {};
    const studentsObject = {};

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
        let course, capacity, userCreditsPair, emailCoursePair, user, credits, email;
        if (inputArray[i].includes(': ')) {
            [course, capacity] = inputArray[i].split(': ');
            capacity = Number(capacity);
            if (courseObject.hasOwnProperty(course)) {
                capacity += courseObject[course];
            }
            if (!studentsObject.hasOwnProperty(course)) {
                studentsObject[course] = [];
            }
            courseObject[course] = capacity;
        } else {
            [userCreditsPair, emailCoursePair] = inputArray[i].split(' with email ');
            [user, credits] = userCreditsPair.split('[');
            credits = Number(credits.split(']')[0]);
            [email, course] = emailCoursePair.split(' joins ');
            if (courseObject.hasOwnProperty(course) && courseObject[course] > 0) {
                let creditsUserEmailArr = Array.of(credits, user, email)
                studentsObject[course].push(creditsUserEmailArr);
                courseObject[course]--;
            }
        }
    }
    // console.log(courseObject);
    // console.log(studentsObject);
    const studentsArray = Object.entries(studentsObject);
    sortByStudentsCount(studentsArray);
    sortByStudentCredits(studentsArray);
    // console.log(studentsArray);
    for (let courseArr of studentsArray) {
        console.log(`${courseArr[0]}: ${courseObject[courseArr[0]]} places left`);
        for (let studentsArr of courseArr[1]) {
            console.log(`--- ${studentsArr[0]}: ${studentsArr[1]}, ${studentsArr[2]}`);
        }
    }
}

softUniStudents(
    [
        'JavaBasics: 2',
        'user1[25] with email user1@user.com joins C#Basics',
        'C#Advanced: 3',
        'JSCore: 4',
        'user2[30] with email user2@user.com joins C#Basics',
        'user13[50] with email user13@user.com joins JSCore',
        'user1[25] with email user1@user.com joins JSCore',
        'user8[18] with email user8@user.com joins C#Advanced',
        'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2',
        'user11[3] with email user11@user.com joins JavaBasics',
        'user45[105] with email user45@user.com joins JSCore',
        'user007[20] with email user007@user.com joins JSCore',
        'user700[29] with email user700@user.com joins JSCore',
        'user900[88] with email user900@user.com joins JSCore'
    ])
console.log('-----------------------------------------');
softUniStudents(
    [
        'JavaBasics: 15',
        'user1[26] with email user1@user.com joins JavaBasics',
        'user2[36] with email user11@user.com joins JavaBasics',
        'JavaBasics: 5',
        'C#Advanced: 5',
        'user1[26] with email user1@user.com joins C#Advanced',
        'user2[36] with email user11@user.com joins C#Advanced',
        'user3[6] with email user3@user.com joins C#Advanced',
        'C#Advanced: 1',
        'JSCore: 8',
        'user23[62] with email user23@user.com joins JSCore'
    ])