const rentCar = require('./rentCar');
const expect = require('chai').expect;

describe("Test 'searchCar' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => rentCar.searchCar(['BMW', 'Audi'], 10)).to.throw();
            expect(() => rentCar.searchCar(['BMW', 'Audi'], '10')).to.throw();
            expect(() => rentCar.searchCar(['BMW', 'Audi'], 'Audi')).to.not.throw();
            expect(() => rentCar.searchCar(['BMW', 'Audi'], ['Audi'])).to.throw();
            expect(() => rentCar.searchCar(['BMW', 'Audi'], NaN)).to.throw();
            expect(() => rentCar.searchCar(['BMW', 'Audi'], undefined)).to.throw();
            expect(() => rentCar.searchCar(['BMW', 'Audi'], null)).to.throw();
            expect(() => rentCar.searchCar(['BMW', 'Audi'], true)).to.throw();
            /////////////rentCar.searchCar////////////////////////
            expect(() => rentCar.searchCar(10, 'Audi')).to.throw();
            expect(() => rentCar.searchCar('10', 'Audi')).to.throw();
            expect(() => rentCar.searchCar('Audi', 'Audi')).to.throw();
            expect(() => rentCar.searchCar(['Audi'], 'Audi')).to.not.throw();
            expect(() => rentCar.searchCar(NaN, 'Audi')).to.throw();
            expect(() => rentCar.searchCar(undefined, 'Audi')).to.throw();
            expect(() => rentCar.searchCar(null, 'Audi')).to.throw();
            expect(() => rentCar.searchCar(true, 'Audi')).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(rentCar.searchCar(['BMW', 'Audi'], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!');
            expect(() => rentCar.searchCar(['Audi', 'Audi'], 'BMW')).to.throw('There are no such models in the catalog!');
        });
    });
});
describe("Test 'calculatePriceOfCar' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => rentCar.calculatePriceOfCar('Audi', 2)).to.not.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', 2.1)).to.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', -2)).to.not.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', 0)).to.not.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', '2')).to.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', 'two')).to.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', [2])).to.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', NaN)).to.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', undefined)).to.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', null)).to.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', true)).to.throw();
            /////////////rentCar.calculatePriceOfCar////////////////////////
            expect(() => rentCar.calculatePriceOfCar(10, 2)).to.throw();
            expect(() => rentCar.calculatePriceOfCar('10', 2)).to.throw();
            expect(() => rentCar.calculatePriceOfCar('Audi', 2)).to.not.throw();
            expect(() => rentCar.calculatePriceOfCar(['Audi'], 2)).to.throw();
            expect(() => rentCar.calculatePriceOfCar(NaN, 2)).to.throw();
            expect(() => rentCar.calculatePriceOfCar(undefined, 2)).to.throw();
            expect(() => rentCar.calculatePriceOfCar(null, 2)).to.throw();
            expect(() => rentCar.calculatePriceOfCar(true, 2)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.equal('You choose Volkswagen and it will cost $40!');
            expect(rentCar.calculatePriceOfCar('Volkswagen', 0)).to.equal('You choose Volkswagen and it will cost $0!');
            expect(rentCar.calculatePriceOfCar('Volkswagen', -2)).to.equal('You choose Volkswagen and it will cost $-40!');
            expect(() => rentCar.calculatePriceOfCar('Ferrari', 2)).to.throw('No such model in the catalog!');
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', 2.2)).to.throw();
        });
    });
});
describe("Test 'checkBudget' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => rentCar.checkBudget(5, 10, 100)).to.not.throw();
            expect(() => rentCar.checkBudget(5, 10, -100)).to.not.throw();
            expect(() => rentCar.checkBudget(5, 10, 100.5)).to.throw();
            expect(() => rentCar.checkBudget(5, 10, '100')).to.throw();
            expect(() => rentCar.checkBudget(5, 10, 'hundred')).to.throw();
            expect(() => rentCar.checkBudget(5, 10, [100])).to.throw();
            expect(() => rentCar.checkBudget(5, 10, NaN)).to.throw();
            expect(() => rentCar.checkBudget(5, 10, undefined)).to.throw();
            expect(() => rentCar.checkBudget(5, 10, null)).to.throw();
            expect(() => rentCar.checkBudget(5, 10, true)).to.throw();
            /////////////rentCar.checkBudget/////////////////////////////
            expect(() => rentCar.checkBudget(5, 10, 100)).to.not.throw();
            expect(() => rentCar.checkBudget(5, -10, 100)).to.not.throw();
            expect(() => rentCar.checkBudget(5, 10.5, 100)).to.throw();
            expect(() => rentCar.checkBudget(5, '10', 100)).to.throw();
            expect(() => rentCar.checkBudget(5, 'ten', 100)).to.throw();
            expect(() => rentCar.checkBudget(5, [10], 100)).to.throw();
            expect(() => rentCar.checkBudget(5, NaN, 100)).to.throw();
            expect(() => rentCar.checkBudget(5, undefined, 100)).to.throw();
            expect(() => rentCar.checkBudget(5, null, 100)).to.throw();
            expect(() => rentCar.checkBudget(5, true, 100)).to.throw();
            /////////////rentCar.checkBudget/////////////////////////////
            expect(() => rentCar.checkBudget(5, 10, 100)).to.not.throw();
            expect(() => rentCar.checkBudget(-5, 10, 100)).to.not.throw();
            expect(() => rentCar.checkBudget(5.2, 10, 100)).to.throw();
            expect(() => rentCar.checkBudget('5', 10, 100)).to.throw();
            expect(() => rentCar.checkBudget('five', 10, 100)).to.throw();
            expect(() => rentCar.checkBudget([5], 10, 100)).to.throw();
            expect(() => rentCar.checkBudget(NaN, 10, 100)).to.throw();
            expect(() => rentCar.checkBudget(undefined, 10, 100)).to.throw();
            expect(() => rentCar.checkBudget(null, 10, 100)).to.throw();
            expect(() => rentCar.checkBudget(true, 10, 100)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(rentCar.checkBudget(5, 10, 100)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(10, 10, 100)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(10, 11, 100)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(10, 11, 0)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(10, 10, -100)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(10, -10, -100)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(-10, -10, -100)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(0, 0, 0)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(10, 0, 100)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(0, 10, 100)).to.equal('You rent a car!');
        });
    });    
});