function solve() {
    class footballTeam {
        #sortFunc = (playerObjsArr) => {
            playerObjsArr.sort((plObjA, plObjB) => plObjA.name.localeCompare(plObjB.name));
            return playerObjsArr;
        }
        constructor(clubName, country) {
            this.clubName = clubName;
            this.country = country;
            this.invitedPlayers = [];
        }
        newAdditions(footballPlayers) {
            let resultOutputArray = [];
            for (let playerLine of footballPlayers) {
                let [name, age, playerValue] = playerLine.split('/');
                age = Number(age);
                playerValue = Number(playerValue);
                let playerIdx = this.invitedPlayers.findIndex((pl) => pl['name'] === name);
                if (playerIdx !== -1 && this.invitedPlayers[playerIdx]['playerValue'] < playerValue) {
                    this.invitedPlayers[playerIdx]['playerValue'] = playerValue;
                } else {
                    this.invitedPlayers.push({ name, age, playerValue });
                    resultOutputArray.push(name);
                }
            }
            const uniquePlayerNamesArr = [...new Set(resultOutputArray)];
            return `You successfully invite ${uniquePlayerNamesArr.join(', ')}.`;
        }
        signContract(selectedPlayer) {
            let [name, playerOffer] = selectedPlayer.split('/');
            playerOffer = Number(playerOffer);
            let playerIdx = this.invitedPlayers.findIndex((pl) => pl['name'] === name);
            if (playerIdx === -1) {
                throw new Error(`${name} is not invited to the selection list!`);
            }
            if (playerOffer < this.invitedPlayers[playerIdx].playerValue) {
                const priceDifference = this.invitedPlayers[playerIdx].playerValue - playerOffer;
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
            } else {
                this.invitedPlayers[playerIdx].playerValue = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
            }
        }
        ageLimit(name, age) {
            let playerIdx = this.invitedPlayers.findIndex((pl) => pl['name'] === name);
            if (playerIdx === -1) {
                throw new Error(`${name} is not invited to the selection list!`);
            }
            if (this.invitedPlayers[playerIdx].age < age) {
                let ageDifference = age - this.invitedPlayers[playerIdx].age;
                if (ageDifference < 5) {
                    return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
                } else if (ageDifference > 5) {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                }
            } else if (this.invitedPlayers[playerIdx].age >= age) {
                return `${name} is above age limit!`;
            }
        }
        transferWindowResult() {
            const sorted = this.#sortFunc(this.invitedPlayers);
            const result = sorted.map((plObjEl) => `Player ${plObjEl.name}-${plObjEl.playerValue}`);
            return `Players list:\n${result.join('\n')}`;
        }
    }
    // let fTeam = new footballTeam("Barcelona", "Spain");
    // console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
    // console.log('----------------------------------------------');
    // let fTeam = new footballTeam("Barcelona", "Spain");
    // console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
    // console.log(fTeam.signContract("Lionel Messi/60"));
    // console.log(fTeam.signContract("Kylian Mbappé/240"));
    // console.log(fTeam.signContract("Barbukov/10"));
    // console.log('----------------------------------------------');
    // let fTeam = new footballTeam("Barcelona", "Spain");
    // console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
    // console.log(fTeam.ageLimit("Lionel Messi", 33));
    // console.log(fTeam.ageLimit("Kylian Mbappé", 30));
    // console.log(fTeam.ageLimit("Pau Torres", 26));
    // console.log(fTeam.signContract("Kylian Mbappé/240"));
    console.log('----------------------------------------------');
    let fTeam = new footballTeam("Barcelona", "Spain");
    console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
    console.log(fTeam.signContract("Kylian Mbappé/240"));
    console.log(fTeam.ageLimit("Kylian Mbappé", 30));
    console.log(fTeam.transferWindowResult());
}

solve()