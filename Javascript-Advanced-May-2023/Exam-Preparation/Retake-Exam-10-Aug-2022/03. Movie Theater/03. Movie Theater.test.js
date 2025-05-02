const movieTheater = require('./03. Movie Theater');
const expect = require('chai').expect;

describe("Test 'ageRestrictions' method", () => {
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
            expect(movieTheater.ageRestrictions('A')).to.equal('There are no age restrictions for this movie');
        });
    });    
});
describe("Test 'moneySpent' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => movieTheater.moneySpent(1, [], 1)).to.throw();
            expect(() => movieTheater.moneySpent(1, [], 'true')).to.throw();
            expect(() => movieTheater.moneySpent(1, [], 'one')).to.throw();
            expect(() => movieTheater.moneySpent(1, [], [true])).to.not.throw();
            expect(() => movieTheater.moneySpent(1, [], NaN)).to.throw();
            expect(() => movieTheater.moneySpent(1, [], undefined)).to.throw();
            expect(() => movieTheater.moneySpent(1, [], null)).to.throw();
            expect(() => movieTheater.moneySpent(1, [], true)).to.throw();
            /////////////movieTheater.moneySpent////////////////////////
            expect(() => movieTheater.moneySpent(1, 10, [])).to.throw();
            expect(() => movieTheater.moneySpent(1, '[]', [])).to.throw();
            expect(() => movieTheater.moneySpent(1, '[sto]', [])).to.throw();
            expect(() => movieTheater.moneySpent(1, [], [])).to.not.throw();
            expect(() => movieTheater.moneySpent(1, NaN, [])).to.throw();
            expect(() => movieTheater.moneySpent(1, undefined, [])).to.throw();
            expect(() => movieTheater.moneySpent(1, null, [])).to.throw();
            expect(() => movieTheater.moneySpent(1, true, [])).to.throw();
            // //////////movieTheater.moneySpent///////////////////////////
            expect(() => movieTheater.moneySpent(1, [], [])).to.not.throw();
            expect(() => movieTheater.moneySpent('1', [], [])).to.throw();
            expect(() => movieTheater.moneySpent('one', [], [])).to.throw();
            expect(() => movieTheater.moneySpent([], [], [])).to.throw();
            expect(() => movieTheater.moneySpent(NaN, [], [])).to.not.throw();
            expect(() => movieTheater.moneySpent(undefined, [], [])).to.throw();
            expect(() => movieTheater.moneySpent(null, [], [])).to.throw();
            expect(() => movieTheater.moneySpent(true, [], [])).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 29.50');
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda'])).to.equal('The total cost for the purchase is 28.00');
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], [])).to.equal('The total cost for the purchase is 25.50');
            expect(movieTheater.moneySpent(1, ['Nachos'], [])).to.equal('The total cost for the purchase is 21.00');
            expect(movieTheater.moneySpent(1, [], [])).to.equal('The total cost for the purchase is 15.00');
            expect(movieTheater.moneySpent(1.1, [], [])).to.equal('The total cost for the purchase is 16.50');
            expect(movieTheater.moneySpent(0, [], [])).to.equal('The total cost for the purchase is 0.00');
            expect(movieTheater.moneySpent(-1, [], [])).to.equal('The total cost for the purchase is -15.00');
            expect(movieTheater.moneySpent(3, ['Nachos'], [])).to.equal('The total cost for the purchase with applied discount is 40.80');
            expect(movieTheater.moneySpent(3.5, ['Nachos'], [])).to.equal('The total cost for the purchase with applied discount is 46.80');
        });
    });    
});
describe("Test 'reservation' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => movieTheater.reservation([], 5)).to.not.throw();
            expect(() => movieTheater.reservation([], '5')).to.throw();
            expect(() => movieTheater.reservation([], 'five')).to.throw();
            expect(() => movieTheater.reservation([], [5])).to.throw();
            expect(() => movieTheater.reservation([], NaN)).to.not.throw();
            expect(() => movieTheater.reservation([], undefined)).to.throw();
            expect(() => movieTheater.reservation([], null)).to.throw();
            expect(() => movieTheater.reservation([], true)).to.throw();
            expect(() => movieTheater.reservation([], -5)).to.not.throw();
            expect(() => movieTheater.reservation([], 0)).to.not.throw();
            /////////////movieTheater.reservation/////////////////////
            expect(() => movieTheater.reservation(10, 5)).to.throw();
            expect(() => movieTheater.reservation('[{}]', 5)).to.throw();
            expect(() => movieTheater.reservation('{}', 5)).to.throw();
            expect(() => movieTheater.reservation([{}], 5)).to.not.throw();
            expect(() => movieTheater.reservation(NaN, 5)).to.throw();
            expect(() => movieTheater.reservation(undefined, 5)).to.throw();
            expect(() => movieTheater.reservation(null, 5)).to.throw();
            expect(() => movieTheater.reservation(true, 5)).to.throw();
            expect(() => movieTheater.reservation(-1, 5)).to.throw();
            expect(() => movieTheater.reservation(0, 5)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(movieTheater.reservation([{rowNumber : 1, freeSeats: 10}, {rowNumber : 2, freeSeats: 15}, {rowNumber : 3, freeSeats: 20}], 5)).to.equal(3);
            expect(movieTheater.reservation([{rowNumber : 1, freeSeats: 10}, {rowNumber : 2, freeSeats: 15}, {rowNumber : 3, freeSeats: 4}], 5)).to.equal(2);
            expect(movieTheater.reservation([{rowNumber : 1, freeSeats: 10}, {rowNumber : 2, freeSeats: 3}, {rowNumber : 3, freeSeats: 4}], 5)).to.equal(1);
            expect(movieTheater.reservation([{rowNumber : 1, freeSeats: -10}, {rowNumber : 2, freeSeats: -15}, {rowNumber : 3, freeSeats: -20}], -30)).to.equal(3);
            expect(movieTheater.reservation([{rowNumber : 1, freeSeats: -10}, {rowNumber : 2, freeSeats: -15}, {rowNumber : 3, freeSeats: -31}], -30)).to.equal(2);
            expect(movieTheater.reservation([{rowNumber : 1, freeSeats: -10}, {rowNumber : 2, freeSeats: -32}, {rowNumber : 3, freeSeats: -31}], -30)).to.equal(1);
        });
    });    
});