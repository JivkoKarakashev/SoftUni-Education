const cinema = require('./cinema');
const expect = require('chai').expect;

describe("Test 'showMovies' method", () => {
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });
    });
});
describe("Test 'ticketPrice' method", () => {
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
            expect(() => cinema.ticketPrice('3D')).to.throw('Invalid projection type.');
        });
    });
});
describe("Test 'swapSeatsInHall' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(cinema.swapSeatsInHall(5, 10)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 20)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 10.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, -10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, '10')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 'ten')).to.eqls('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, [10])).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, NaN)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, undefined)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, null)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, true)).to.equal('Unsuccessful change of seats in the hall.');
            /////////////cinema.swapSeatsInHall////////////////////////
            expect(cinema.swapSeatsInHall(5, 10)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 10)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5.5, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('5', 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('five', 10)).to.eqls('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall([5], 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(NaN, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(true, 10)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(cinema.swapSeatsInHall(21, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 20)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-10, -10)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});