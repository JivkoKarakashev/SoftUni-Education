const lookupChar = require('./lookupChar');
const expect = require('chai').expect;

describe("Test with invalid argument type", () => {
    it("should pass and return 'undefined' with 'Object' as first argument and 'Number' as index", () => {
        const paramObj = {1: 'ford', 2: 'opel', 3: 'mazda'};
        const index = 1;
        expect(lookupChar(paramObj, index)).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as first argument and 'String' as index", () => {
        const paramStr = 'undeFined';
        const index = '4';
        expect(lookupChar(paramStr, index)).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as first argument and floating-point 'Number' as index", () => {
        const paramStr = 'undeFined';
        const index = 4.123;
        expect(lookupChar(paramStr, index)).to.equal(undefined);
    });
});
describe("Test with valid argument type but invalid index value", () => {
    it("should pass and return 'Incorrect index' with negative index", () => {
        const paramStr = 'Incorrect';
        const index = -1;
        expect(lookupChar(paramStr, index)).to.equal('Incorrect index');
    });
    it("should pass and return 'Incorrect index' with bigger than or equal to the string length", () => {
        const paramStr = 'Incorrect';
        const index = 9;
        expect(lookupChar(paramStr, index)).to.equal('Incorrect index');
    });
});
describe("Test for correct return", () => {
    it("should pass and return 'R'", () => {
        const paramStr = 'CorRect';
        const index = 3;
        expect(lookupChar(paramStr, index)).to.equal('R');
    });
    it("should pass and return 'T'", () => {
        const paramStr = 'Pass the Test!';
        const index = 9;
        expect(lookupChar(paramStr, index)).to.equal('T');
    });
});