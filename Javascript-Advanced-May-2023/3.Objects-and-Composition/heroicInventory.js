function heroicInventory(inputArray) {

    const heroesRegisterArr = [];

    for (const currHeroData of inputArray) {
        let [name, level, itemsStr] = currHeroData.split(' / ');
        level = Number(level);
        let items;
        itemsStr !== undefined
            ? items = itemsStr.split(', ')
            : items = [];
        const currHeroObj = {
            name,
            level,
            items,
        };
        heroesRegisterArr.push(currHeroObj)
    }
    console.log(JSON.stringify(heroesRegisterArr));
}

heroicInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ])
console.log('----------------------------------');
heroicInventory(
    [
        'Jake / 1000 / Gauss, HolidayGrenade'
    ])
console.log('----------------------------------');
heroicInventory(
    [
        'Jake / 1000'
    ])