function adAstra(inputString) {

    const foodInfoPetern = /([|#]{1})(?<item>[A-Za-z\s]+)\1(?<expDate>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>\d{1,5})\1/g;
    let foodListArray = [];
    let totalCalories = 0;

    let foodInfoArray = foodInfoPetern.exec(inputString);
    while (foodInfoArray) {
        let currItem = foodInfoArray.groups['item'];
        let expDate = foodInfoArray.groups['expDate'];
        let calories = Number(foodInfoArray.groups['calories']);
        // console.log(calories);
        totalCalories += calories;
        foodListArray.push(currItem, expDate, calories);

        foodInfoArray = foodInfoPetern.exec(inputString);
        // console.log(foodInfoArray);
    }
    // console.log(foodListArray);
    const days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    let foodListArrayLength = foodListArray.length;
    for (let i = 0; i < foodListArrayLength; i += 3) {
        console.log(`Item: ${foodListArray[i]}, Best before: ${foodListArray[i + 1]}, Nutrition: ${foodListArray[i + 2]}`);
    }
}

adAstra(
    [
        '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])
console.log('-----------------------------------------------------');
adAstra(
    ['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
    ])
console.log('-----------------------------------------------------');
adAstra(
    ['Hello|#Invalid food#19/03/20#450|$5*(@'])
console.log('-----------------------------------------------------');
adAstra(
    ['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|#Bread#20/01/20#9000#'])