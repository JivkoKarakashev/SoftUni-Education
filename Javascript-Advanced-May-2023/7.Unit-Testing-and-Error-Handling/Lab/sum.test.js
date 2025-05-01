const sum = require('./sum');
const expect = require('chai').expect;
// let { expect } = require('chai');

describe("Test for array", () => {
    it("should faill with Obj argument", () => {
        expect({'1': 1, '2': 2, '3': 3, '4': 4}).to.not.be.an('array');
    });
    it("should faill with func argument", () => {
        expect(() => {}).to.not.be.an('array');
    });
    it("should faill with string argument", () => {
        expect('stringTest').to.not.be.an('array');
    });
    it("should faill with number argument", () => {
        expect(9).to.not.be.an('array');
    });
    it("should faill with boolean argument", () => {
        expect(true).to.be.not.an('array');
    });
    it("should pass with array argument", () => {
        expect([1, 2, 3, 4]).to.be.an('array');
    });
});
describe("Test for sum elements in array", () => {
    it("should pass with stringified nums in the array", () => {
        expect(sum(['1', '2', '3', '4'])).to.equal(10);
    });
    it("should pass with zeroes in the array", () => {
        expect(sum([0, 0, 0, 0])).to.equal(0);
    });
    it("should pass and return NaN with char in the array", () => {
        expect(sum([1, 2, 3, 'a'])).to.be.NaN;
    });
    it("should pass with negative num in the array", () => {
        expect(sum([1, 2, 3, -4])).to.equal(2);
    });
    it("should pass with empty array", () => {
        expect(sum([])).to.equal(0);
    });
    it("should not sum array as array element", () => {
        expect(sum([1, 2, 3, [4]])).to.equal(10);
    });
});
