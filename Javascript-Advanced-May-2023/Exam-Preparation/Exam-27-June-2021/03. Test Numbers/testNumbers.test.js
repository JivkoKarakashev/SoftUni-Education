const testNumbers = require('./testNumbers');
const expect = require('chai').expect;

describe("Test 'sumNumbers' method", () => {
    describe("Test for valid input", () => {
        it("should pass and return undefined with Invalid argument", () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(1, 0)).to.equal('1.00');
            expect(testNumbers.sumNumbers(1, 1.4)).equal('2.40');
            expect(testNumbers.sumNumbers(1, 3)).equal('4.00');
            expect(testNumbers.sumNumbers(1, -1)).equal('0.00');
            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, 'one')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, 'str')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, [1])).to.be.undefined;
            expect(testNumbers.sumNumbers(1, { 1: 1 })).to.be.undefined;
            expect(testNumbers.sumNumbers(1, NaN)).to.equal('NaN');
            expect(testNumbers.sumNumbers(1, undefined)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, true)).to.be.undefined;
            // ///////testNumbers.sumNumbers///////////////////
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(0, 1)).to.equal('1.00');
            expect(testNumbers.sumNumbers(1.4, 1)).equal('2.40');
            expect(testNumbers.sumNumbers(3, 1)).equal('4.00');
            expect(testNumbers.sumNumbers(-1, 1)).equal('0.00');
            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers('one', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers('str', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers([1], 1)).to.be.undefined;
            expect(testNumbers.sumNumbers({ 1: 1 }, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(NaN, 1)).to.equal('NaN');
            expect(testNumbers.sumNumbers(undefined, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(true, 1)).to.be.undefined;
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
            expect(testNumbers.sumNumbers(-1.5, -1.5)).to.equal('-3.00');
            expect(testNumbers.sumNumbers(NaN, NaN)).to.equal('NaN');
        });
    });
});
describe("Test 'numberChecker' method", () => {
    describe("Test for valid input", () => {
        it("should pass and return undefined with Invalid argument", () => {
            expect(() => testNumbers.numberChecker(1)).to.not.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(0)).to.not.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(1.4)).to.not.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(3)).to.not.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(-1)).to.not.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker('1')).to.not.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker('one')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker('str')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker([1])).to.not.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker({ 1: 1 })).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(NaN)).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined)).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(null)).to.not.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(true)).to.not.throw('The input is not a number!');
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(1.1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-2)).to.equal('The number is even!');
        });
    });
});
describe("Test 'averageSumArray' method", () => {
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(testNumbers.averageSumArray([0, 1, 2, 3])).to.equal(1.5);
            expect(testNumbers.averageSumArray(['0', '1', '2', '3'])).to.equal(30.75);
            expect(testNumbers.averageSumArray([0, -1, -2, -3])).to.equal(-1.5);
            expect(testNumbers.averageSumArray([])).to.be.NaN;            
        });
    });
});