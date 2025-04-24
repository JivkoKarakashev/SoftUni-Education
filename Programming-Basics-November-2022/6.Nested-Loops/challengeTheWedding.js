function challengeTheWedding(input) {

    let menCount = input[0];
    let womenCount = input[1];
    let tablesCount = input[2];
    let allDates = "";
    let noFreeTables = false;

    for (let m = 1; m <= menCount; m++) {
        for (let w = 1; w <= womenCount; w++) {
            tablesCount--;
            let currDate = `(${m} <-> ${w})`;
            allDates += `${currDate} `;
            if (tablesCount === 0){
            noFreeTables = true;
            break;
            }
        }
        if (noFreeTables){
            break;
        }
    }
    console.log(allDates)
}

challengeTheWedding
(["5",
"8",
"40"])
