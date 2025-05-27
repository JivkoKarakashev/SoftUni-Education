const lottery = require('./Lottery');
const expect = require('chai').expect;

describe("Test 'buyLotteryTicket' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => lottery.buyLotteryTicket(10, 5, 2)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5, '2')).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5, 'two')).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5, [2])).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5, {2: 2})).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5, NaN)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5, undefined)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5, null)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5, true)).to.not.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5, false)).to.throw('Unable to buy lottery ticket!');
            /////////////lottery.buyLotteryTicket/////////////////////////////
            expect(() => lottery.buyLotteryTicket(10, 5, true)).to.not.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 5.5, true)).to.not.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 0, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, -5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, '5', true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 'five', true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, [5], true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, {5: 5}, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, NaN, true)).to.not.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, undefined, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, null, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, true, true)).to.throw('Invalid input!');
            /////////////lottery.buyLotteryTicket/////////////////////////////
            expect(() => lottery.buyLotteryTicket(10, 5, true)).to.not.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(10.5, 5, true)).to.not.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(0, 5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(-10, 5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket('10', 5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket('ten', 120, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket([10], 5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket({10: 10}, 5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(NaN, 5, true)).to.not.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(undefined, 5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(null, 5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(true, 5, true)).to.throw('Invalid input!');
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(lottery.buyLotteryTicket(10, 5, true)).to.equal('You bought 5 tickets for 50$.');
            expect(lottery.buyLotteryTicket(1, 1, true)).to.equal('You bought 1 tickets for 1$.');
            expect(lottery.buyLotteryTicket(1, 1.1, true)).to.equal('You bought 1.1 tickets for 1.1$.');
            expect(lottery.buyLotteryTicket(1.1, 1, true)).to.equal('You bought 1 tickets for 1.1$.');
            expect(() => lottery.buyLotteryTicket(10, 5, false)).to.throw('Unable to buy lottery ticket!');
        });
    });
});
describe("Test 'checkTicket' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], 5)).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '[1, 2, 3, 4, 5, 6]')).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], ['1', '2', '3', '4', '5', '6'])).to.not.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], 'array')).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [[1, 2, 3, 4, 5, 6]])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], {'[1, 2, 3, 4, 5, 6]':[1, 2, 3, 4, 5, 6]})).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], NaN)).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], undefined)).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], null)).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], true)).to.throw('Invalid input!');
            /////////////lottery.checkTicket/////////////////////////////
            expect(() => lottery.checkTicket(5, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket('[1, 2, 3, 4, 5, 6]', [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket(['1', '2', '3', '4', '5', '6'], [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
            expect(() => lottery.checkTicket('array', [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([[1, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket({'[1, 2, 3, 4, 5, 6]':[1, 2, 3, 4, 5, 6]}, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket(NaN, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket(undefined, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket(null, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket(true, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.equal('Congratulations you win, check your reward!');
            // expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12])).to.be.undefined;
        });
    });
});
describe("Test 'secondChance' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => lottery.secondChance(1, 5)).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, '[1, 2, 3, 4, 5, 6]')).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, ['1', '2', '3', '4', '5', '6'])).to.not.throw('Invalid input!');
            expect(() => lottery.secondChance(1, 'array')).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, [])).to.not.throw('Invalid input!');
            expect(() => lottery.secondChance(1, [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
            expect(() => lottery.secondChance(1, {'[1, 2, 3, 4, 5, 6]':[1, 2, 3, 4, 5, 6]})).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, NaN)).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, undefined)).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, null)).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, true)).to.throw('Invalid input!');
            /////////////lottery.secondChance/////////////////////////////
            expect(() => lottery.secondChance(1, [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
            expect(() => lottery.secondChance(1.1, [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
            expect(() => lottery.secondChance(0, [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
            expect(() => lottery.secondChance(-1, [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
            expect(() => lottery.secondChance('1', [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.secondChance('one', [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.secondChance([], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.secondChance([1], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.secondChance({1: 1}, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.secondChance(NaN, [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
            expect(() => lottery.secondChance(undefined, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.secondChance(null, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(() => lottery.secondChance(true, [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(lottery.secondChance(1, [1, 2, 3])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(1, ['1', '2', '3'])).to.equal('Sorry, your ticket didn\'t win!');
            expect(lottery.secondChance(1.1, [1.1, 2, 3])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(-1, [-1, 2, 3])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(0, [0, 2, 3])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(NaN, [NaN, 2, 3])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(4, [1, 2, 3])).to.equal('Sorry, your ticket didn\'t win!');
        });
    });
});