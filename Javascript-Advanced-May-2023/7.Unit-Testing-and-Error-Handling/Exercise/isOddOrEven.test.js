const isOddOrEven = require('./isOddOrEven');
const { expect } = require('chai');

describe("Test with invalid argument type", () => {
    it("should pass and return 'undefined' with 'Object' as argument", () => {
        const paramObj = {1: 1, 2: 2, 3: 3};
        expect(isOddOrEven(paramObj)).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'Number' as argument", () => {
        const paramNum = 1234;
        expect(isOddOrEven(paramNum)).to.equal(undefined);
    });
});
describe("Test for correctly with valid arguments", () => {
    it("should pass and return 'even' as return", () => {
        const evenStr = 'even';
        expect(isOddOrEven(evenStr)).to.equal('even');
    });
    it("should pass and return 'odd' as return", () => {
        const oddStr = 'odd';
        expect(isOddOrEven(oddStr)).to.equal('odd');
    });
    it("should pass and return 'odd' as return", () => {
        const oddStr = 'This is test for multiple strings';
        expect(isOddOrEven(oddStr)).to.equal('odd');
    });
});