function netherRealms(inputString) {

    const sortBattleBook = (btlBookArr) => btlBookArr.sort((deamonA, deamonB) => deamonA[0].localeCompare(deamonB[0]));
    const healthCalculation = (deamon, bookObj) => {
        let demonHealthArray = health.exec(deamon);
        let deamonHealt = 0;
        while (demonHealthArray) {
            // console.log(demonHealthArray);
            deamonHealt += demonHealthArray[0].charCodeAt(0);
            demonHealthArray = health.exec(deamon);
        }
        bookObj[deamon].push(deamonHealt);
    }
    const baseDamageCalculation = (deamon) => {
        let demonBaseDamageArray = baseDamage.exec(deamon);
        let deamonBaseDamage = 0;
        while (demonBaseDamageArray) {
            // console.log(demonHealthArray);
            deamonBaseDamage += Number(demonBaseDamageArray[0]);
            demonBaseDamageArray = baseDamage.exec(deamon);
        }
        return deamonBaseDamage;
    }
    const baseDamageModifier = (deamon, bookObj, baseDmg) => {
        let damageModifierArray = damageModifier.exec(deamon);

        while (damageModifierArray) {
            // console.log(damageModifierArray);            
            (damageModifierArray[0] === '*')
                ? baseDmg *= 2
                : baseDmg /= 2;

            damageModifierArray = damageModifier.exec(deamon);
        }
        bookObj[deamon].push(baseDmg);
    }

    const battleBookObj = {};
    const validName = /[^ ,]+/g;
    const health = /[^0-9+\-*\/.]/g;
    const baseDamage = /[+-]?\d+(\.\d+)?/g;
    const damageModifier = /[\/*]/g;
    let demonsArray = validName.exec(inputString);
    // let demonHealthArray = health.exec(inputString);

    while (demonsArray) {
        // console.log(demonsArray);
        let deamon = demonsArray[0];
        battleBookObj[deamon] = [];
        demonsArray = validName.exec(inputString);
        healthCalculation(deamon, battleBookObj);
        let baseDamage = baseDamageCalculation(deamon);
        baseDamageModifier(deamon, battleBookObj, baseDamage);
    }
    // console.log(battleBookObj);
    let sortedBattleBookArr = sortBattleBook(Object.entries(battleBookObj));
    // console.log(sortedBattleBookArr);
    for (let currDeamon of sortedBattleBookArr) {
        console.log(`${currDeamon[0]} - ${currDeamon[1][0]} health, ${currDeamon[1][1].toFixed(2)} damage`);
    }
}

netherRealms('M3ph-0.5s-0.5t0.0**')
console.log('------------------------');
netherRealms('M3ph1st0**, Azazel')
console.log('------------------------');
netherRealms('Gos/ho')