function salary(input) {

    let tabsNums = Number(input[0]);
    let salary = Number(input[1]);
    
    if (salary > 0) {
        for (let i = 2; i < tabsNums + 2; i++) {
            let tab = String(input[i])
            let penalty = 0;
            switch (tab) {
                case "Facebook": penalty = 150; break;
                case "Instagram": penalty = 100; break;
                case "Reddit": penalty = 50; break
                default: penalty = 0; break;
            }
            salary = salary - penalty;
        }        
    }
    if (salary > 0) {
        console.log(salary.toFixed(0))
    }
    else {
        console.log("You have lost your salary.")
    }
}

salary (["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])






