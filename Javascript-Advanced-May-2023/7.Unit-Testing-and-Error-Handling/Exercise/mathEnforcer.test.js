const mathEnforcer = require('./mathEnforcer');
const expect = require('chai').expect;

describe("Test 'addFive' method", () => {
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.addFive('5');
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.addFive('string');
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' without argument", () => {
        const result = mathEnforcer.addFive();
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' without argument", () => {
        const result = mathEnforcer.addFive([5]);
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' without argument", () => {
        const result = mathEnforcer.addFive({5: 5});
        expect(result).to.equal(undefined);
    });
    it("should pass and return correct result with integer 'Number' as argument", () => {
        const result = mathEnforcer.addFive(5);
        expect(result).to.equal(10);
    });
    it("should pass and return correct result with integer 'Number' as argument", () => {
        const result = mathEnforcer.addFive(0);
        expect(result).to.equal(5);
    });
    it("should pass and return correct result with floating-point 'Number' as argument", () => {
        const result = mathEnforcer.addFive(5.001);
        expect(result).to.equal(5.001 + 5);
    });
    it("should pass and return correct result with floating-point 'Number' as argument", () => {
        const result = mathEnforcer.addFive(5.1);
        expect(result).to.closeTo(10, 0.1);
    });
    it("should pass and return correct result with negative 'Number' as argument", () => {
        const result = mathEnforcer.addFive(-2);
        expect(result).to.equal(3);
    });
    it("should pass and return correct result with floating-point negative 'Number' as argument", () => {
        const result = mathEnforcer.addFive(-2.02);
        expect(result).to.closeTo(2.9, 0.1);
    });
});
describe("Test 'subtractTen' method", () => {
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.subtractTen('15');
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.subtractTen('string');
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' without argument", () => {
        const result = mathEnforcer.subtractTen();
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.subtractTen([15]);
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.subtractTen({15: 15});
        expect(result).to.equal(undefined);
    });
    it("should pass and return correct result with integer 'Number' as argument", () => {
        const result = mathEnforcer.subtractTen(15);
        expect(result).to.equal(5);
    });
    it("should pass and return correct result with integer 'Number' as argument", () => {
        const result = mathEnforcer.subtractTen(0);
        expect(result).to.equal(-10);
    });
    it("should pass and return correct result with floating-point 'Number' as argument", () => {
        const result = mathEnforcer.subtractTen(15.001);
        expect(result).to.equal(15.001 - 10);
    });
    it("should pass and return correct result with floating-point 'Number' as argument", () => {
        const result = mathEnforcer.subtractTen(15.1);
        expect(result).to.closeTo(5, 0.1);
    });
    it("should pass and return correct result with negative 'Number' as argument", () => {
        const result = mathEnforcer.subtractTen(-5);
        expect(result).to.equal(-15);
    });
    it("should pass and return correct result with floating-point negative 'Number' as argument", () => {
        const result = mathEnforcer.subtractTen(-5.02);
        expect(result).to.closeTo(-15.01, 0.1);
    });
});
describe("Test 'sum' method", () => {
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.sum('5', 5);
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.sum(5, '5');
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as arguments", () => {
        const result = mathEnforcer.sum('5', '5');
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.sum('string', 5);
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as argument", () => {
        const result = mathEnforcer.sum(5, 'string');
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' with 'String' as arguments", () => {
        const result = mathEnforcer.sum('string', 'string');
        expect(result).to.equal(undefined);
    });
    it("should pass and return 'undefined' without arguments", () => {
        const result = mathEnforcer.sum();
        expect(result).to.equal(undefined);
    });
    it("should pass and return correct result with integer 'Number' as argument", () => {
        const result = mathEnforcer.sum([-5], [-4]);
        expect(result).to.equal(undefined);
    });
    it("should pass and return correct result with integer 'Number' as argument", () => {
        const result = mathEnforcer.sum([-5, -4]);
        expect(result).to.equal(undefined);
    });
    it("should pass and return correct result with integer 'Number' as argument", () => {
        const result = mathEnforcer.sum(5, 5);
        expect(result).to.equal(10);
    });
    it("should pass and return correct result with integer 'Number' as argument", () => {
        const result = mathEnforcer.sum(0, 0);
        expect(result).to.equal(0);
    });
    it("should pass and return correct result with floating-point 'Number' as argument", () => {
        const result = mathEnforcer.sum(5.001, 5);
        expect(result).to.equal(5.001 + 5);
    });
    it("should pass and return correct result with floating-point 'Number' as argument", () => {
        const result = mathEnforcer.sum(5.003, 5.007);
        expect(result).to.closeTo(10, 0.1);
    });
    it("should pass and return correct result with negative 'Number' as argument", () => {
        const result = mathEnforcer.sum(-2, -3);
        expect(result).to.equal(-5);
    });
    it("should pass and return correct result with negative 'Number' as argument", () => {
        const result = mathEnforcer.sum(5, -7);
        expect(result).to.equal(-2);
    });
    it("should pass and return correct result with floating-point negative 'Number' as argument", () => {
        const result = mathEnforcer.sum(-2.01, -3.02);
        expect(result).to.closeTo(-5.02, 0.1);
    });
});