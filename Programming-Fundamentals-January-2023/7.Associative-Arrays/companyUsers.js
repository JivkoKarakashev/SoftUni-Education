function companyUsers(inputArray){

    const companyUsersListObj = {};
    inputArray.forEach(currCompUsrIdLine => {
        let [company, usrId] = currCompUsrIdLine.split(' -> ');
        
        if (!companyUsersListObj.hasOwnProperty(company)){
            companyUsersListObj[company] = [];
        }
        if (!companyUsersListObj[company].includes(usrId)){
            companyUsersListObj[company].push(usrId);
        }
    });
    
    const companyUsersListArr = Object.entries(companyUsersListObj);
    const sortedCompanyUsersListArr = companyUsersListArr.sort((compA, compB) => compA[0].localeCompare(compB[0]));
    // console.log(sortedCompanyUsersListArr);

    sortedCompanyUsersListArr.forEach(currCompUsrIdLine => {
        console.log(currCompUsrIdLine[0])
        for (let currUsrId of currCompUsrIdLine[1]) {
            console.log(`-- ${currUsrId}`)
        }
    });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])