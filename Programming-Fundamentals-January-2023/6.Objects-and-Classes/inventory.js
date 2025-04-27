function inventory(inputArray){

    class Hero{
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items;
        }
        print = () => {
            console.log(`Hero: ${this.name}`)
            console.log(`level => ${this.level}`)
            console.log(`items => ${this.items}`)
        }
            
    }

    let heroesArrObjs = [];
    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++){
        let heroName;
        let heroLevel;
        let heroItems;
        let currHeroLineArr = inputArray[i].split(' / ');
        [heroName, heroLevel, heroItems] = [...currHeroLineArr];
        let newHero = new Hero(heroName, heroLevel, heroItems);
        heroLevel = Number(heroLevel);
        heroesArrObjs.push(newHero);
    }
    let sortedHeroesArrObjs = heroesArrObjs.sort((a, b) => a.level - b.level);
    // console.log(sortedHeroesArrObjs)
    for (let heroObj of sortedHeroesArrObjs){
        heroObj.print();
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
console.log('--------------------------------------')
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])