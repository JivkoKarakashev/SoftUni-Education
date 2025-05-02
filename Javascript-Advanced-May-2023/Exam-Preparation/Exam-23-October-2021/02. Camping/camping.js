function solve() {
    class SummerCamp {
        #numberOfParticipants = 0;
        #sortFunc = (objsArr) => {
            const sorted = objsArr.sort((objA, objB) => objB.wins - objA.wins);
            return sorted;
        }
        constructor(organizer, location,) {
            this.organizer = organizer;
            this.location = location;
            this.priceForTheCamp = {
                "child": 150,
                "student": 300,
                "collegian": 500,
            };
            this.listOfParticipants = [];
        }
        registerParticipant(name, condition, money) {
            const participIdx = this.listOfParticipants.findIndex((participObj) => participObj['name'] === name);
            if (!this.priceForTheCamp.hasOwnProperty(condition)) {
                throw new Error('Unsuccessful registration at the camp.');
            }
            if (participIdx !== -1) {
                return `The ${name} is already registered at the camp.`;
            }
            if (money < this.priceForTheCamp[condition]) {
                return 'The money is not enough to pay the stay at the camp.';
            }
            this.listOfParticipants.push({ 'name': name, 'condition': condition, 'power': 100, 'wins': 0 });
            this.#numberOfParticipants++;
            return `The ${name} was successfully registered.`;
        }
        unregisterParticipant(name) {
            const participIdx = this.listOfParticipants.findIndex((participObj) => participObj['name'] === name);
            if (participIdx === -1) {
                throw new Error(`The ${name} is not registered in the camp.`);
            }
            // const participIdx = this.listOfParticipants.indexOf(name);
            this.listOfParticipants.splice(participIdx, 1);
            return `The ${name} removed successfully.`;
        }
        timeToPlay(typeOfGame, participant1, participant2) {
            const particip1Idx = this.listOfParticipants.findIndex((participObj) => participObj.name === participant1);
            if (typeOfGame === 'WaterBalloonFights') {
                const particip2Idx = this.listOfParticipants.findIndex((participObj) => participObj.name === participant2);
                if (particip1Idx === -1 || particip2Idx === -1) {
                    throw new Error('Invalid entered names.');
                }
                const particip1Cond = this.listOfParticipants[particip1Idx].condition;
                const particip2Cond = this.listOfParticipants[particip2Idx].condition;
                if (particip1Cond !== particip2Cond) {
                    throw new Error('Choose players with equal condition.');
                }
                const particip1Pow = this.listOfParticipants[particip1Idx].power;
                const particip2Pow = this.listOfParticipants[particip2Idx].power;
                let winerName = '';
                if (particip1Pow > particip2Pow) {
                    this.listOfParticipants[particip1Idx].wins += 1;
                    winerName = participant1;
                } else if (particip1Pow < particip2Pow) {
                    this.listOfParticipants[particip2Idx].wins += 1;
                    winerName = participant2;
                } else if (particip1Pow === particip2Pow) {
                    return 'There is no winner.';
                }
                return `The ${winerName} is winner in the game ${typeOfGame}.`;
            } else if (typeOfGame === 'Battleship') {
                if (particip1Idx === -1) {
                    throw new Error('Invalid entered name.');
                }
                this.listOfParticipants[particip1Idx].power += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`;
            }
        }
        toString() {
            const sorted = this.#sortFunc(this.listOfParticipants);
            const outputParticipArray = [];
            for (let participant of sorted) {
                outputParticipArray.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
            }
            // const outputParticipArrayLength = outputParticipArray.length;
            return `${this.organizer} will take ${this.#numberOfParticipants} participants on camping to ${this.location}\n${outputParticipArray.join('\n')}`;
        }
    }
    // const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
    // console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
    // console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
    // console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
    // console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
    // console.log('-----------------------------------------------------------');
    // const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
    // console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
    // console.log(summerCamp.unregisterParticipant("Petar"));
    // console.log(summerCamp.unregisterParticipant("Petar Petarson"));
    // console.log('-----------------------------------------------------------');
    // const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
    // console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
    // console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
    // console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
    // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
    // console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
    // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
    // console.log('-----------------------------------------------------------');
    const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
    console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
    console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
    console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
    // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
    console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
    console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
    console.log(summerCamp.toString());
}

solve()