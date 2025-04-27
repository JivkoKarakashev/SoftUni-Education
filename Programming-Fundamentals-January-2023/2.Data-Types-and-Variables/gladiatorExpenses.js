// •	Every second lost game, his helmet is broken.
// •	Every third lost game, his sword is broken.
// •	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// •	Every second time, when his shield brakes, his armor also needs to be repaired. 


function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let helmetRepairs = Math.trunc(lostFights / 2) * helmetPrice;
    let swordRepairs = Math.trunc(lostFights / 3) * swordPrice;
    let shieldBreaksCounter = 0;
    for (let i = lostFights; i > 0; i--){
        if (i % 2 === 0 && i % 3 === 0){
            shieldBreaksCounter++;
        }
    }
    let shieldRepairs = shieldBreaksCounter * shieldPrice;
    let armorRepairs = Math.trunc(shieldBreaksCounter / 2) * armorPrice;
    let expenses = helmetRepairs + swordRepairs + shieldRepairs + armorRepairs;    
    
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )