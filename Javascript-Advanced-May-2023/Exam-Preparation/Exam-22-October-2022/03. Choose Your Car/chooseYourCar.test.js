const chooseYourCar = require('./chooseYourCar');
const expect = require('chai').expect;

describe("Test 'choosingType' method", () => {
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            () => expect(chooseYourCar.choosingType('Sedan', 'blue', 1899)).to.throw('Invalid Year!');
            () => expect(chooseYourCar.choosingType('Sedan', 'blue', 2023)).to.throw('Invalid Year!');
            () => expect(chooseYourCar.choosingType('hatch', 'blue', 2020)).to.throw('This type of car is not what you are looking for.');
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).to.equal('This blue Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2009)).to.equal('This Sedan is too old for you, especially with that blue color.');
        });
    });
})
describe("Test 'brandName' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], 1)).to.not.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], 1.1)).to.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], -1)).to.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], 2)).to.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], '1')).to.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], 'one')).to.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], [1])).to.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], NaN)).to.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], undefined)).to.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], null)).to.throw();
            expect(() => chooseYourCar.brandName(['BMW', 'VW'], true)).to.throw();
            /////////////chooseYourCar.brandName////////////////////
            expect(() => chooseYourCar.brandName(10, 1)).to.throw();
            expect(() => chooseYourCar.brandName("['BMW', 'VW']", 1)).to.throw();
            expect(() => chooseYourCar.brandName({ 'BMW': 'BMW', 'VW': 'VW' }, 1)).to.throw();
            expect(() => chooseYourCar.brandName([], 0)).to.throw();
            expect(() => chooseYourCar.brandName(NaN, 1)).to.throw();
            expect(() => chooseYourCar.brandName(undefined, 1)).to.throw();
            expect(() => chooseYourCar.brandName(null, 1)).to.throw();
            expect(() => chooseYourCar.brandName(true, 1)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(chooseYourCar.brandName(['BMW', 'VW'], 1)).to.equal('BMW');
            expect(chooseYourCar.brandName(['BMW', 'VW'], 0)).to.equal('VW');
            expect(chooseYourCar.brandName(['BMW', 'VW', 'Ford'], 1)).to.equal('BMW, Ford');
            expect(chooseYourCar.brandName(['BMW', 'VW', 'Ford'], 2)).to.equal('BMW, VW');
        });
    });
});
describe("Test 'carFuelConsumption' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => chooseYourCar.carFuelConsumption(10, 1)).to.not.throw();
            expect(() => chooseYourCar.carFuelConsumption(10, 0)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(10, -1)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(10, '1')).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(10, 'one')).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(10, [1])).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(10, NaN)).to.not.throw();
            expect(chooseYourCar.carFuelConsumption(10, NaN)).to.equal('The car burns too much fuel - NaN liters!');
            expect(() => chooseYourCar.carFuelConsumption(10, undefined)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(10, null)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(10, true)).to.throw();
            /////////////chooseYourCar.carFuelConsumption////////////////////
            expect(() => chooseYourCar.carFuelConsumption(10, 1)).to.not.throw();
            expect(() => chooseYourCar.carFuelConsumption(0, 1)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(-10, 1)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption('10', 1)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption('ten', 1)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption([10], 1)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(NaN, 1)).to.not.throw();
            expect(chooseYourCar.carFuelConsumption(NaN, 1)).to.equal('The car burns too much fuel - NaN liters!');
            expect(() => chooseYourCar.carFuelConsumption(undefined, 1)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(null, 1)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(true, 1)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 7.1)).to.equal('The car burns too much fuel - 7.10 liters!');
        });
    });
});