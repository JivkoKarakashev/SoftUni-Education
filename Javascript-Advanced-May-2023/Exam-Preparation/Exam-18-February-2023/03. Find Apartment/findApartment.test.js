const findNewApartment = require('./findApartment');
const expect = require('chai').expect;

describe("Test 'isGoodLocation' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => findNewApartment.isGoodLocation('', 10)).to.throw();
            expect(() => findNewApartment.isGoodLocation('', 'true')).to.throw();
            expect(() => findNewApartment.isGoodLocation('', 'str')).to.throw();
            expect(() => findNewApartment.isGoodLocation('', [true])).to.throw();
            expect(() => findNewApartment.isGoodLocation('', NaN)).to.throw();
            expect(() => findNewApartment.isGoodLocation('', undefined)).to.throw();
            expect(() => findNewApartment.isGoodLocation('', null)).to.throw();
            expect(() => findNewApartment.isGoodLocation('', true)).to.not.throw();
            /////////////findNewApartment/isGoodLocation/////////////////////////////
            expect(() => findNewApartment.isGoodLocation(10, true)).to.throw();
            expect(() => findNewApartment.isGoodLocation('10', true)).to.not.throw();
            expect(() => findNewApartment.isGoodLocation('str', true)).to.not.throw();
            expect(() => findNewApartment.isGoodLocation(['str'], true)).to.throw();
            expect(() => findNewApartment.isGoodLocation(NaN, true)).to.throw();
            expect(() => findNewApartment.isGoodLocation(undefined, true)).to.throw();
            expect(() => findNewApartment.isGoodLocation(null, true)).to.throw();
            expect(() => findNewApartment.isGoodLocation(true, true)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Burgas', false)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });
    });    
});
describe("Test 'isLargeEnough' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => findNewApartment.isLargeEnough([10], 10)).to.not.throw();
            expect(() => findNewApartment.isLargeEnough([10], 'true')).to.throw();
            expect(() => findNewApartment.isLargeEnough([10], 'str')).to.throw();
            expect(() => findNewApartment.isLargeEnough([10], [true])).to.throw();
            expect(() => findNewApartment.isLargeEnough([10], NaN)).to.not.throw();
            expect(() => findNewApartment.isLargeEnough([10], undefined)).to.throw();
            expect(() => findNewApartment.isLargeEnough([10], null)).to.throw();
            expect(() => findNewApartment.isLargeEnough([10], true)).to.throw();
            /////////////findNewApartment/isLargeEnough/////////////////////////////
            expect(() => findNewApartment.isLargeEnough(10, 10)).to.throw();
            expect(() => findNewApartment.isLargeEnough('[10]', 10)).to.throw();
            expect(() => findNewApartment.isLargeEnough([], 10)).to.throw();
            expect(() => findNewApartment.isLargeEnough([10], 10)).to.not.throw();
            expect(() => findNewApartment.isLargeEnough(NaN, 10)).to.throw();
            expect(() => findNewApartment.isLargeEnough(undefined, 10)).to.throw();
            expect(() => findNewApartment.isLargeEnough(null, 10)).to.throw();
            expect(() => findNewApartment.isLargeEnough(true, 10)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(findNewApartment.isLargeEnough([10, 20, 30], 10)).to.equal(`10, 20, 30`);
            expect(findNewApartment.isLargeEnough([10, 20, 30], 20)).to.equal(`20, 30`);
            expect(findNewApartment.isLargeEnough([10, 20, 30], 30)).to.equal(`30`);
            expect(findNewApartment.isLargeEnough([10, 20, 30], -30)).to.equal(`10, 20, 30`);
            expect(findNewApartment.isLargeEnough([10, 20, 30], 40)).to.equal(``);
            expect(findNewApartment.isLargeEnough([10, 20, 30], NaN)).to.equal(``);
        });
    });    
});
describe("Test 'isItAffordable' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => findNewApartment.isItAffordable(10, 20)).to.not.throw();
            expect(() => findNewApartment.isItAffordable(10, 0)).to.throw();
            expect(() => findNewApartment.isItAffordable(10, -20)).to.throw();
            expect(() => findNewApartment.isItAffordable(10, 'true')).to.throw();
            expect(() => findNewApartment.isItAffordable(10, 'str')).to.throw();
            expect(() => findNewApartment.isItAffordable(10, [true])).to.throw();
            expect(() => findNewApartment.isItAffordable(10, NaN)).to.not.throw();
            expect(() => findNewApartment.isItAffordable(10, undefined)).to.throw();
            expect(() => findNewApartment.isItAffordable(10, null)).to.throw();
            expect(() => findNewApartment.isItAffordable(10, true)).to.throw();
            /////////////findNewApartment/isItAffordable/////////////////////////////
            expect(() => findNewApartment.isItAffordable(10, 20)).to.not.throw();
            expect(() => findNewApartment.isItAffordable(0, 20)).to.throw();
            expect(() => findNewApartment.isItAffordable(-10, 20)).to.throw();
            expect(() => findNewApartment.isItAffordable('10', 20)).to.throw();
            expect(() => findNewApartment.isItAffordable('deset', 20)).to.throw();
            expect(() => findNewApartment.isItAffordable([10], 20)).to.throw();
            expect(() => findNewApartment.isItAffordable(NaN, 20)).to.not.throw();
            expect(() => findNewApartment.isItAffordable(undefined, 20)).to.throw();
            expect(() => findNewApartment.isItAffordable(null, 20)).to.throw();
            expect(() => findNewApartment.isItAffordable(true, 20)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(findNewApartment.isItAffordable(10, 20)).to.equal(`You can afford this home!`);
            expect(findNewApartment.isItAffordable(10, 10)).to.equal(`You can afford this home!`);
            expect(findNewApartment.isItAffordable(20, 10)).to.equal(`You don't have enough money for this house!`);            
        });
    });    
});