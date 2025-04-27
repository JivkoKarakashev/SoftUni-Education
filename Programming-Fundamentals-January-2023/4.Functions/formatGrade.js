function formatGrade(grade){

    let rankName = '';

    if (grade < 3){
        rankName = 'Fail';
    } else if (grade < 3.5){
        rankName = 'Poor';
    } else if (grade < 4.5){
        rankName = 'Good';
    } else if (grade < 5.5){
        rankName = 'Very good';
    } else {
        rankName = 'Excellent';
    }

    if (grade < 3){
        console.log(`${rankName} (${Math.trunc(grade)})`);
    } else {
        console.log(`${rankName} (${grade.toFixed(2)})`);
    }

}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);