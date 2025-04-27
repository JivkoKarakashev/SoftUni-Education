function arenaTier(inputArray) {

    let sortSkillFunction = (skillsListArr) => {
        skillsListArr[1].sort((skillA, skillB) => {
        if (skillA[1] === skillB[1]){
            return skillA[0].localeCompare(skillB[0]);
        } else {
            return skillB[1] - skillA[1];
        }});
    }

    let sortNameFunction = (gladsListArr) => {
        gladsListArr.sort((gladA, gladB) => {
        if (gladA[2] === gladB[2]){
            return gladA[0].localeCompare(gladB[0]);
        } else {
            return gladB[2] - gladA[2];
        }});
    }

    const gladiatorsPool = {};
    for (let currLine of inputArray) {
        if (!currLine.includes(' vs ') && !currLine.includes('Ave Cesar')){
            let [name, technique, skill] = currLine.split(' -> ');
            skill = Number(skill);
            if (!gladiatorsPool.hasOwnProperty(name)){
                gladiatorsPool[name] = [];
                gladiatorsPool[name].push(technique, skill);
            } else {
                if (!gladiatorsPool[name].includes(technique)){
                    gladiatorsPool[name].push(technique, skill);
                } else {
                    let skilIdx = gladiatorsPool[name].indexOf(technique) + 1;
                    if (gladiatorsPool[name][skilIdx] < skill){
                        gladiatorsPool[name][skilIdx] = skill;
                    }
                }
            }
        }
        if (currLine.includes(' vs ')){
            let isCommonTechnique = false;
            let [glad1 , glad2] = currLine.split(' vs ');
            if (!gladiatorsPool.hasOwnProperty(glad1) || !gladiatorsPool.hasOwnProperty(glad2)){
                continue;
            }
            
            for (let i = 0; i < gladiatorsPool[glad1].length; i += 2) {
                let currTechGlad1 = gladiatorsPool[glad1][i];
                if (gladiatorsPool[glad2].includes(currTechGlad1)){
                    isCommonTechnique = true;
                    break;
                }
            }
            if (isCommonTechnique){
                let glad1TotalSkill = 0;
                let glad1SkillsArrLength = gladiatorsPool[glad1].length;
                let glad2TotalSkill = 0;
                let glad2SkillsArrLength = gladiatorsPool[glad2].length;
                for (let i = 1; i < glad1SkillsArrLength; i += 2) {
                    glad1TotalSkill += gladiatorsPool[glad1][i];
                }
                for (let i = 1; i < glad2SkillsArrLength; i += 2) {
                    glad2TotalSkill += gladiatorsPool[glad2][i];
                }
                if (glad1TotalSkill > glad2TotalSkill){
                    delete gladiatorsPool[glad2];
                } 
                else if (glad1TotalSkill < glad2TotalSkill){
                    delete gladiatorsPool[glad1];
                }
            }
        }
        if (currLine.includes('Ave Cesar')){
            let gladiatorsPoolArr = Object.entries(gladiatorsPool);
            // console.log(gladiatorsPoolArr);
            for (let currGladLine of gladiatorsPoolArr) {
                let totalSkills = 0;
                let skillsLength = currGladLine[1].length;
                for (let i = 1; i < skillsLength; i += 2) {
                    totalSkills += currGladLine[1][i];                    
                }
                currGladLine.push(totalSkills);
                // console.log(currGladLine);
            }
            sortNameFunction(gladiatorsPoolArr);           
            // console.log(gladiatorsPoolArr);
            for (let currGladLineArr of gladiatorsPoolArr) {
                let sortedGladiatorLineArr = [];
                let skillsLineArray = [];
                sortedGladiatorLineArr.push(currGladLineArr[0]);
                let skillsLength = currGladLineArr[1].length;
                for (let i = 0; i < skillsLength; i += 2) {
                    let skillArr = Array.from([currGladLineArr[1][i], currGladLineArr[1][i + 1]]);
                    skillsLineArray.push(skillArr);
                }
                sortedGladiatorLineArr.push(skillsLineArray)
                sortedGladiatorLineArr.push(currGladLineArr[2])
                sortSkillFunction(sortedGladiatorLineArr);
                // console.log(sortedGladiatorLineArr);
                console.log(`${sortedGladiatorLineArr[0]}: ${sortedGladiatorLineArr[2]} skill`);
                for (let currSkill of sortedGladiatorLineArr[1]) {
                    console.log(`- ${currSkill[0]} <!> ${currSkill[1]}`);
                }
            }
        }
    }
    // console.log(gladiatorsPool);
}

arenaTier(
    [
        'Peter -> BattleCry -> 400',
        'Alex -> PowerPunch -> 300',
        'Stefan -> Duck -> 200',
        'Stefan -> Tiger -> 250',
        'Ave Cesar'
        ]
        )
console.log('---------------------');
arenaTier(
    [
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ])