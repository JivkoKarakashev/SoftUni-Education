function solve() {
    class JobOffers {
        #sortFunc = (candidatesArr) => {
            const sorted = candidatesArr.sort((candAObj, candBObj) => candAObj['name'].localeCompare(candBObj['name']));
            return sorted;
        }
        constructor(employer, position) {
            this.employer = employer;
            this.position = position;
            this.jobCandidates = [];
        }
        jobApplication(candidates) {
            const addedCandidatesArray = [];
            for (let canidate of candidates) {
                let [name, education, yearsExperience] = canidate.split('-');
                yearsExperience = Number(yearsExperience);
                let candidateIdx = this.jobCandidates.findIndex((cand) => cand['name'] === name);
                if (candidateIdx !== -1) {
                    let currExperience = this.jobCandidates[candidateIdx]['yearsExperience'];
                    if (yearsExperience > currExperience) {
                        this.jobCandidates[candidateIdx]['yearsExperience'] = yearsExperience;
                    }
                } else if (candidateIdx === -1) {
                    this.jobCandidates.push({ name, education, yearsExperience });
                    addedCandidatesArray.push(name);
                }
            }
            const uniquePlayerNamesArr = [...new Set(addedCandidatesArray)];
            return `You successfully added candidates: ${uniquePlayerNamesArr.join(', ')}.`;
        }
        jobOffer(chosenPerson) {
            let [name, minimalExperience] = chosenPerson.split('-');
            minimalExperience = Number(minimalExperience);
            let candidateIdx = this.jobCandidates.findIndex((cand) => cand['name'] === name);
            if (candidateIdx === -1) {
                throw new Error(`${name} is not in the candidates list!`);
            }
            const coosenExp = this.jobCandidates[candidateIdx].yearsExperience;
            if (minimalExperience > coosenExp) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
            }
            this.jobCandidates[candidateIdx].yearsExperience = 'hired';
            return `Welcome aboard, our newest employee is ${name}.`;
        }
        salaryBonus(name) {
            let candidateIdx = this.jobCandidates.findIndex((cand) => cand['name'] === name);
            if (candidateIdx === -1) {
                throw new Error(`${name} is not in the candidates list!`);
            }
            const currEducation = this.jobCandidates[candidateIdx].education;
            if (currEducation === 'Bachelor') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
            } else if (currEducation === 'Master') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
            } else {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
            }
        }
        candidatesDatabase() {
            const candidatesCount = this.jobCandidates.length;
            if (candidatesCount === 0) {
                throw new Error('Candidate Database is empty!');
            }
            const outputCandidatesArr = [];
            const sortedCandidatesArr = this.#sortFunc(this.jobCandidates);
            for (let candidateObj of sortedCandidatesArr) {
                outputCandidatesArr.push(`${candidateObj.name}-${candidateObj.yearsExperience}`);
            }
            return `Candidates list:\n${outputCandidatesArr.join('\n')}`;
        }
    }
    // let Jobs = new JobOffers("Google", "Strategy Analyst");
    // console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
    // console.log('-----------------------------------------------------');
    // let Jobs = new JobOffers("Google", "Strategy Analyst");
    // console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
    // console.log(Jobs.jobOffer("John Doe-8"));
    // console.log(Jobs.jobOffer("Peter Parker-4"));
    // console.log(Jobs.jobOffer("John Jones-8"));
    // console.log('-----------------------------------------------------');
    // let Jobs = new JobOffers("Google", "Strategy Analyst");
    // console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
    // console.log(Jobs.jobOffer("John Doe-8"));
    // console.log(Jobs.jobOffer("Peter Parker-4"));
    // console.log(Jobs.salaryBonus("John Doe"));
    // console.log(Jobs.salaryBonus("Peter Parker"));
    console.log('-----------------------------------------------------');
    let Jobs = new JobOffers("Google", "Strategy Analyst");
    console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
    console.log(Jobs.jobOffer("John Doe-8"));
    console.log(Jobs.jobOffer("Peter Parker-4"));
    console.log(Jobs.jobOffer("Jordan Cole-4"));
    console.log(Jobs.salaryBonus("Jordan Cole"));
    console.log(Jobs.salaryBonus("John Doe"));
    console.log(Jobs.candidatesDatabase());
}

solve()