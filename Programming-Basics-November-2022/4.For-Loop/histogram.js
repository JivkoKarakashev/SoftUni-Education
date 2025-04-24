function histogram(input){

    let nums = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
            
    for ( let i = 1; i <= nums; i++){
        let num = Number(input[i]);
        if (num < 200){
            count1 ++;
            p1 = count1 / nums * 100;                        
        }
        else if (num >= 200 && num < 400){
            count2++;
            p2 = count2 / nums * 100;                        
        }
        else if (num >= 400 && num < 600){
            count3++;
            p3 = count3 / nums * 100;                        
        }
        else if (num >= 600 && num < 800){
            count4++;
            p4 = count4 / nums * 100;                        
        }
        else if (num >= 800){
            count5++;
            p5 = count5 / nums * 100;                        
        }
    }    
    console.log(`${p1.toFixed(2)}%`)
    console.log(`${p2.toFixed(2)}%`)
    console.log(`${p3.toFixed(2)}%`)
    console.log(`${p4.toFixed(2)}%`)
    console.log(`${p5.toFixed(2)}%`)
}

histogram (["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])









