function heroes() {

    const canFight = (state) => {
        state.fight = () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    };
    const canSpell = (state) => {
        state.cast = (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    };

    const fighter = (name) => {
        let stateObj = {
            name,
            health: 100,
            stamina: 100,
        }
        Object.assign(stateObj, canFight(stateObj));
        return stateObj;
    };
    const mage = (name) => {
        let stateObj = {
            name,
            health: 100,
            mana: 100,
        }
        Object.assign(stateObj, canSpell(stateObj));
        return stateObj;
    };

    return heroesCreatorObj = {
        fighter,
        mage,
    }
}


let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina); 
console.log(scorcher.mana);