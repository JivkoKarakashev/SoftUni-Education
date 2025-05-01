function constructionCrew(workerObj) {

    const requieredLvlOfHydrated = 0.1 * workerObj.weight * workerObj.experience;

    if (workerObj.dizziness === true) {
        workerObj.levelOfHydrated += requieredLvlOfHydrated;
        workerObj.dizziness = false;
    }
    return workerObj;
}

console.log(constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }));
console.log('---------------------');
console.log(constructionCrew(
    {
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }));
console.log('---------------------');
console.log(constructionCrew(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }));