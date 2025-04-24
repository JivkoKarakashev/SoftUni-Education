function traveling(input) {

    let index = 0;
    let destination = "";
    let currInput = input[index];           // i = 0

    while (currInput !== "End"){
        destination = currInput;
        index++;                            // i = 1
        let budget = input[index];          // i = 1        
        let savedMoney = 0;
        index++;                            // i = 2
        
        while (savedMoney < budget){
            savedMoney += Number(input[index]);     // i = 2
            index++;                                // i = 3            
            if (savedMoney >= budget){                 
                currInput = input[index];           // i = 3
                console.log(`Going to ${destination}!`)                
                break;
            }            
        }
    }
}

traveling (["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

