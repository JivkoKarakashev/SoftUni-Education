const weddingDay = require('./weddingDay');
const expect = require('chai').expect;

describe("Test 'PickVenue' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => weddingDay.pickVenue(150, 120, 10)).to.throw();
            expect(() => weddingDay.pickVenue(150, 120, '10')).to.throw();
            expect(() => weddingDay.pickVenue(150, 120, 'Varna')).to.not.throw();
            expect(() => weddingDay.pickVenue(150, 120, ['Varna'])).to.throw();
            expect(() => weddingDay.pickVenue(150, 120, NaN)).to.throw();
            expect(() => weddingDay.pickVenue(150, 120, undefined)).to.throw();
            expect(() => weddingDay.pickVenue(150, 120, null)).to.throw();
            expect(() => weddingDay.pickVenue(150, 120, true)).to.throw();
            //////////////////////////////////////////////////////////////
            expect(() => weddingDay.pickVenue(150, 120, 'Varna')).to.not.throw();
            expect(() => weddingDay.pickVenue(150, '120', 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue(150, 'sto', 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue(150, [120], 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue(150, NaN, 'Varna')).to.not.throw();
            expect(() => weddingDay.pickVenue(150, undefined, 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue(150, null, 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue(150, true, 'Varna')).to.throw();
            //////////////////////////////////////////////////////////////
            expect(() => weddingDay.pickVenue(150, 120, 'Varna')).to.not.throw();
            expect(() => weddingDay.pickVenue('150', 120, 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue('stoipedeset', 120, 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue([150], 120, 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue(NaN, 120, 'Varna')).to.not.throw();
            expect(() => weddingDay.pickVenue(undefined, 120, 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue(null, 120, 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue(true, 120, 'Varna')).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
            expect(() => weddingDay.pickVenue(149, 121, 'Burgas')).to.throw();
            expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal('This venue does not meet your requirements!')
            expect(weddingDay.pickVenue(150, 121, 'Varna')).to.equal('This venue does not meet your requirements!')
            expect(weddingDay.pickVenue(149, 120, 'Varna')).to.equal('This venue does not meet your requirements!')
        });
    });    
});
describe("Test 'otherSpendings ' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => weddingDay.otherSpendings([], [], 10)).to.throw();
            expect(() => weddingDay.otherSpendings([], [], 'true')).to.throw();
            expect(() => weddingDay.otherSpendings([], [], 'str')).to.throw();
            expect(() => weddingDay.otherSpendings([], [], [true])).to.throw();
            expect(() => weddingDay.otherSpendings([], [], NaN)).to.throw();
            expect(() => weddingDay.otherSpendings([], [], undefined)).to.throw();
            expect(() => weddingDay.otherSpendings([], [], null)).to.throw();
            expect(() => weddingDay.otherSpendings([], [], true)).to.not.throw();
            //////////////////////////////////////////////////////////////
            expect(() => weddingDay.otherSpendings([], 10, true)).to.throw();
            expect(() => weddingDay.otherSpendings([], '[]', true)).to.throw();
            expect(() => weddingDay.otherSpendings([], '[sto]', true)).to.throw();
            expect(() => weddingDay.otherSpendings([], [], true)).to.not.throw();
            expect(() => weddingDay.otherSpendings([], NaN, true)).to.throw();
            expect(() => weddingDay.otherSpendings([], undefined, true)).to.throw();
            expect(() => weddingDay.otherSpendings([], null, true)).to.throw();
            expect(() => weddingDay.otherSpendings([], true, true)).to.throw();
            // //////////////////////////////////////////////////////////////
            expect(() => weddingDay.otherSpendings(10, [], true)).to.throw();
            expect(() => weddingDay.otherSpendings('10', [], true)).to.throw();
            expect(() => weddingDay.otherSpendings('deset', [], true)).to.throw();
            expect(() => weddingDay.otherSpendings([], [], true)).to.not.throw();
            expect(() => weddingDay.otherSpendings(NaN, [], true)).to.throw();
            expect(() => weddingDay.otherSpendings(undefined, [], true)).to.throw();
            expect(() => weddingDay.otherSpendings(null, [], true)).to.throw();
            expect(() => weddingDay.otherSpendings(true, [], true)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal('You spend 2900$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal('You spend 1200$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.equal('You spend 1700$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings([], [], false)).to.equal('You spend 0$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal('You spend 2465$ for wedding decoration and photography with 15% discount!');
        });
    });    
});
describe("Test 'tableDistribution' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => weddingDay.tableDistribution(10, 10)).to.not.throw();
            expect(() => weddingDay.tableDistribution(10, '10')).to.throw();
            expect(() => weddingDay.tableDistribution(10, 'str')).to.throw();
            expect(() => weddingDay.tableDistribution(10, [10])).to.throw();
            expect(() => weddingDay.tableDistribution(10, NaN)).to.not.throw();
            expect(() => weddingDay.tableDistribution(10, undefined)).to.throw();
            expect(() => weddingDay.tableDistribution(10, null)).to.throw();
            expect(() => weddingDay.tableDistribution(10, true)).to.throw();
            expect(() => weddingDay.tableDistribution(10, -1)).to.throw();
            expect(() => weddingDay.tableDistribution(10, 0)).to.throw();
            //////////////////////////////////////////////////////////////
            expect(() => weddingDay.tableDistribution(10, 10)).to.not.throw();
            expect(() => weddingDay.tableDistribution('10', 10)).to.throw();
            expect(() => weddingDay.tableDistribution('str', 10)).to.throw();
            expect(() => weddingDay.tableDistribution([10], 10)).to.throw();
            expect(() => weddingDay.tableDistribution(NaN, 10)).to.not.throw();
            expect(() => weddingDay.tableDistribution(undefined, 10)).to.throw();
            expect(() => weddingDay.tableDistribution(null, 10)).to.throw();
            expect(() => weddingDay.tableDistribution(true, 10)).to.throw();
            expect(() => weddingDay.tableDistribution(-1, 10)).to.throw();
            expect(() => weddingDay.tableDistribution(0, 10)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(weddingDay.tableDistribution(5, 1)).to.equal('There is only 5 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(6, 1)).to.equal('You have 1 tables with 6 guests on table.');
            expect(weddingDay.tableDistribution(1, 1)).to.equal('There is only 1 people on every table, you can join some tables.');
        });
    });    
});
