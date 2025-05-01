const createCalculator = require('./createCalculator');
const { expect } = require('chai');

describe("Test for object with methods as function return", () => {
    it("should pass and return 'object'", () => {
        const obj = createCalculator();
        expect(obj).to.be.an('Object');
    });
    it("should pass and contains 3 methods", () => {
        const obj = createCalculator();
        expect(obj).to.have.own.property('add');
        expect(obj).to.have.own.property('subtract');
        expect(obj).to.have.own.property('get');
    });
});
describe("Test for returned 'object' functionality", () => {
    it("should pass and parse string and return number", () => {
        const obj = createCalculator();
        const add = obj.add('2');
        const result = obj.get();
        expect(result).to.be.a('number');
    });
    it("should pass and parse string of number and add to internal sum", () => {
        const obj = createCalculator();
        const add = obj.add('2');
        result = obj.get();
        expect(result).to.equal(2);
    });
    it("should pass and parse string of negative number and subtract from internal sum", () => {
        const obj = createCalculator();
        const subtract = obj.subtract('-2');
        const result = obj.get();
        expect(result).to.equal(2);
    });
});