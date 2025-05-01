function solve() {
    class SmartHike {
        #filterByCriteriaFunc = (hikesObjsArr, criteria) => {
            const criteraObj = {
                'hard': hikesObjsArr.filter((hikeObj) => hikeObj.difficult === 'hard'),
                'easy': hikesObjsArr.filter((hikeObj) => hikeObj.difficult === 'easy'),
                'all': hikesObjsArr,
            };
            const filteredHikesObjsArr = criteraObj[criteria];
            return filteredHikesObjsArr;
        };
        #bestHikeFunc = (filteredHikesObjsArr) => {
            filteredHikesObjsArr.sort((hikeObj1, hikeObj2) => hikeObj1.time - hikeObj2.time);
            return filteredHikesObjsArr[0];
        };
        goals = {};
        listOfHikes = [];
        resources = 100;
        constructor(usrName) {
            this.username = usrName;
        }
        addGoal(peak, altitude) {
            if (this.goals.hasOwnProperty(peak)) {
                return `${peak} has already been added to your goals`;
            }
            this.goals[peak] = { peak, altitude };
            return `You have successfully added a new goal - ${peak}`;
        }
        hike(peak, time, difficult) {
            if (!this.goals.hasOwnProperty(peak)) {
                throw new Error(`${peak} is not in your current goals`);
            }
            if (this.goals[peak].resources === 0) {
                throw new Error('You don\'t have enough resources to start the hike');
            }
            const resourceRequirements = time * 10;
            const resTimeDifference = this.resources - resourceRequirements;
            if (resTimeDifference < 0) {
                return 'You don\'t have enough resources to complete the hike';
            }
            this.resources -= resourceRequirements;
            this.listOfHikes.push({ peak, time, difficult });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
        rest(time) {
            this.resources += time * 10;
            if (this.resources >= 100) {
                this.resources = 100;
                return 'Your resources are fully recharged. Time for hiking!';
            }
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
        showRecord(criteria) {
            const filteredHikesObjsArr = this.#filterByCriteriaFunc(this.listOfHikes, criteria);
            if (this.listOfHikes.length === 0) {
                return `${this.username} has not done any hiking yet`;
            }
            if (filteredHikesObjsArr.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            if (criteria === 'all') {
                const outputHikesArr = [];
                this.listOfHikes.forEach(hikeObj => outputHikesArr.push(`${this.username} hiked ${hikeObj.peak} for ${hikeObj.time} hours`));
                return `All hiking records:\n${outputHikesArr.join('\n')}`;
            }
            const bestHikeObj = this.#bestHikeFunc(filteredHikesObjsArr);
            return `${this.username}'s best ${criteria} hike is ${bestHikeObj.peak} peak, for ${bestHikeObj.time} hours`
        }
    }
    // const user = new SmartHike('Vili');
    // console.log(user.addGoal('Musala', 2925));
    // console.log(user.addGoal('Rui', 1706));
    // console.log(user.addGoal('Musala', 2925));
    // console.log('----------------------');
    // const user = new SmartHike('Vili');
    // console.log(user.addGoal('Musala', 2925));
    // console.log(user.addGoal('Rui', 1706));
    // console.log(user.hike('Musala', 8, 'hard'));
    // console.log(user.hike('Rui', 3, 'easy'));
    // console.log(user.hike('Everest', 12, 'hard'));
    // console.log('----------------------');
    // const user = new SmartHike('Vili');
    // console.log(user.addGoal('Musala', 2925));
    // console.log(user.hike('Musala', 8, 'hard'));
    // console.log(user.rest(4));
    // console.log(user.rest(5));
    // console.log('----------------------');
    // const user = new SmartHike('Vili');
    // console.log(user.showRecord('all'));
    console.log('----------------------');
    const user = new SmartHike('Vili');
    user.addGoal('Musala', 2925);
    user.hike('Musala', 8, 'hard');
    console.log(user.showRecord('easy'));
    user.addGoal('Vihren', 2914);
    user.hike('Vihren', 4, 'hard');
    console.log(user.showRecord('hard'));
    user.addGoal('Rui', 1706);
    user.hike('Rui', 3, 'easy');
    console.log(user.showRecord('all'));
}
solve()