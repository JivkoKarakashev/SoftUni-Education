function solve() {
    class Triathlon {
        #sortFunc = (objsArr) => {
            const outputArray = [];
            objsArr.sort((partcipAobj, partcipBobj) => partcipAobj.participantName.localeCompare(partcipBobj.participantName));
            for (const participObj of objsArr) {
                outputArray.push(participObj.participantName);
            }
            return outputArray;
        }
        constructor(competitionName) {
            this.competitionName = competitionName;
            this.participants = {};
            this.listOfFinalists = [];
        }
        addParticipant(participantName, participantGender) {
            if (this.participants.hasOwnProperty(participantName)) {
                return `${participantName} has already been added to the list`;
            }
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
        completeness(participantName, condition) {
            if (!this.participants.hasOwnProperty(participantName)) {
                throw new Error(`${participantName} is not in the current participants list`);
            }
            else if (condition < 30) {
                throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
            }
            const completedCount = Math.trunc(condition / 30);
            if (completedCount < 3) {
                return `${participantName} could only complete ${completedCount} of the disciplines`;
            } else if (completedCount === 3) {
                this.listOfFinalists.push({ participantName, participantGender: this.participants[participantName] });
                return `Congratulations, ${participantName} finished the whole competition`;
            }
        }
        rewarding(participantName) {
            const participIdx = this.listOfFinalists.findIndex((participObj) => participObj['participantName'] === participantName);
            if (participIdx === -1) {
                return `${participantName} is not in the current finalists list`;
            }
            return `${participantName} was rewarded with a trophy for his performance`;
        }
        showRecord(criteria) {
            if (this.listOfFinalists.length === 0) {
                return 'There are no finalists in this competition';
            }
            // const finalistResultObj = this.listOfFinalists.find((finalistObj) => finalistObj.participantGender === criteria);
            if (criteria !== 'all') {
                const finalistResultObj = this.listOfFinalists.find((finalistObj) => finalistObj.participantGender === criteria);
                if (finalistResultObj === undefined) {
                    return `There are no ${criteria}'s that finished the competition`;
                } else {
                    return `${finalistResultObj.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
            } else if (criteria === 'all') {
                const outputArray = this.#sortFunc(this.listOfFinalists);
                return `List of all ${this.competitionName} finalists:\n${outputArray.join('\n')}`;
            }
        }
    }
    // const contest = new Triathlon("Dynamos");
    // console.log(contest.addParticipant("Peter", "male"));
    // console.log(contest.addParticipant("Sasha", "female"));
    // console.log(contest.addParticipant("Peter", "male"));
    // console.log('---------------------------------------');
    // const contest = new Triathlon("Dynamos");
    // console.log(contest.addParticipant("Peter", "male"));
    // console.log(contest.addParticipant("Sasha", "female"));
    // console.log(contest.addParticipant("George", "male"));
    // console.log(contest.completeness("Peter", 100));
    // console.log(contest.completeness("Sasha", 70));
    // console.log(contest.completeness("George", 20));
    // console.log('---------------------------------------');
    // const contest = new Triathlon("Dynamos");
    // console.log(contest.addParticipant("Peter", "male"));
    // console.log(contest.addParticipant("Sasha", "female"));
    // console.log(contest.completeness("Peter", 100));
    // console.log(contest.completeness("Sasha", 70));
    // console.log(contest.rewarding("Peter"));
    // console.log(contest.rewarding("Sasha"));
    // console.log('---------------------------------------');
    // const contest = new Triathlon("Dynamos");
    // console.log(contest.showRecord("all"));
    // console.log('---------------------------------------');
    // const contest = new Triathlon("Dynamos");
    // console.log(contest.addParticipant("Peter", "male"));
    // console.log(contest.addParticipant("Sasha", "female"));
    // console.log(contest.completeness("Peter", 100));
    // console.log(contest.completeness("Sasha", 90));
    // console.log(contest.rewarding("Peter"));
    // console.log(contest.rewarding("Sasha"));
    // console.log(contest.showRecord("all"));
    console.log('---------------------------------------');
    const contest = new Triathlon("Dynamos");
    console.log(contest.addParticipant("Peter", "male"));
    console.log(contest.addParticipant("Sasha", "female"));
    console.log(contest.addParticipant("George", "male"));
    console.log(contest.completeness("Peter", 100));
    console.log(contest.completeness("Sasha", 90));
    console.log(contest.completeness("George", 95));
    console.log(contest.rewarding("Peter"));
    console.log(contest.rewarding("Sasha"));
    console.log(contest.rewarding("George"));
    console.log(contest.showRecord("male"));
}

solve()