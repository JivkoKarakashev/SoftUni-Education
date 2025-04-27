function heroesOfCodeAndLogicVII(inpuArray) {

    const castSpell = (heroesLstObj, heroName, manaCost, spellName) => {
        manaCost = Number(manaCost);
        if (heroesLstObj[heroName][1] >= manaCost) {
            heroesLstObj[heroName][1] -= manaCost;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesLstObj[heroName][1]} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
    }
    const takeDamage = (heroesLstObj, heroName, damage, attacker) => {
        damage = Number(damage);
        let dmgTaken = Math.min(heroesLstObj[heroName][0], damage);
        heroesLstObj[heroName][0] -= dmgTaken;
        if (heroesLstObj[heroName][0] > 0) {
            console.log(`${heroName} was hit for ${dmgTaken} HP by ${attacker} and now has ${heroesLstObj[heroName][0]} HP left!`);
        } else {
            delete heroesLstObj[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }
    const recharge = (heroesLstObj, heroName, manaRecharge) => {
        manaRecharge = Number(manaRecharge);
        let manaRecharged = Math.min(200 - heroesLstObj[heroName][1], manaRecharge);
        heroesLstObj[heroName][1] += manaRecharged;
        console.log(`${heroName} recharged for ${manaRecharged} MP!`);
    }
    const heal = (heroesLstObj, heroName, healthPoints)  => {
        healthPoints = Number(healthPoints);
        let hpRestored = Math.min(100 - heroesLstObj[heroName][0], healthPoints);
        heroesLstObj[heroName][0] += hpRestored;
        console.log(`${heroName} healed for ${hpRestored} HP!`);
    }
    
    const heroesListObj = {};
    const heroesCount = Number(inpuArray.shift());

    for (let i = 0; i < heroesCount; i++) {
        let [hero, health, mana] = inpuArray.shift().split(' ');
        health = Number(health);
        mana = Number(mana);
        // console.log(hero);
        if (!heroesListObj.hasOwnProperty(hero)) {
            heroesListObj[hero] = [];
        }
        heroesListObj[hero].push(health, mana);
    }
    // console.log(heroesListObj);

    let currLine = inpuArray.shift();
    while (currLine !== 'End') {
        let command, hero, mp, spell, hp, damage, attacker;
        if (currLine.includes('CastSpell')) {
            [command, hero, mp, spell] = currLine.split(' - ');            
        } else if (currLine.includes('TakeDamage')) {
            [command, hero, damage, attacker] = currLine.split(' - ');
        } else if (currLine.includes('Recharge')) {
            [command, hero, mp] = currLine.split(' - ');
        } else if (currLine.includes('Heal')) {
            [command, hero, hp] = currLine.split(' - ');
        }       

        switch (command) {
            case 'CastSpell': castSpell(heroesListObj, hero, mp, spell); break;
            case 'TakeDamage': takeDamage(heroesListObj, hero, damage, attacker); break;
            case 'Recharge': recharge(heroesListObj, hero, mp); break;
            case 'Heal': heal(heroesListObj, hero, hp); break;
            default: ; break;
        }
        currLine = inpuArray.shift();
    }
    const heroesListArr = Object.entries(heroesListObj);
    // console.log(heroesListArr);
    if (heroesListArr.length !== 0) {
        for (let currHero of heroesListArr) {
            console.log(`${currHero[0]}`);
            console.log(`  HP: ${currHero[1][0]}`);
            console.log(`  MP: ${currHero[1][1]}`);
        }
    }
}

heroesOfCodeAndLogicVII(
    [
        '2',
        'Solmyr 85 120',
        'Kyrre 99 50',
        'Heal - Solmyr - 10',
        'Recharge - Solmyr - 50',
        'TakeDamage - Kyrre - 66 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End',
    ])
console.log('---------------------------------');
heroesOfCodeAndLogicVII(
    [
        '4',
        'Adela 90 150',
        'SirMullich 70 40',
        'Ivor 1 111',
        'Tyris 94 61',
        'Heal - SirMullich - 50',
        'Recharge - Adela - 100',
        'CastSpell - Tyris - 1000 - Fireball',
        'TakeDamage - Tyris - 99 - Fireball',
        'TakeDamage - Ivor - 3 - Mosquito',
        'End',
    ])