const PaymentPackage = require('./PaymentPackage');
const expect = require('chai').expect;

describe("Test constructor with name argument", () => {
    it("should pass and throw an error with empty String", () => {
        const hrPack = () => new PaymentPackage('', 10);
        expect(hrPack).to.throw();
    });
    it("should pass and throw an error with Number", () => {
        const hrPack = () => new PaymentPackage(10, 10);
        expect(hrPack).to.throw();
    });
    it("should pass and throw an error with Object", () => {
        const hrPack = () => new PaymentPackage({ 'name': 'HR' }, 10);
        expect(hrPack).to.throw();
    });
    it('should pass and not throw an error with valid input', () => {
        const hrPack = () => new PaymentPackage('HR', 10);
        expect(hrPack).to.not.throw();
    });
});
describe("Test constructor with value argument", () => {
    it("should pass and throw an error with empty String", () => {
        const hrPack = () => new PaymentPackage('HR', '');
        expect(hrPack).to.throw();
    });
    it("should pass and throw an error with negative Number", () => {
        const hrPack = () => new PaymentPackage('HR', -10);
        expect(hrPack).to.throw();
    });
    it("should pass and throw an error with Object", () => {
        const hrPack = () => new PaymentPackage('HR', { '10': 10 });
        expect(hrPack).to.throw();
    });
    it('should pass and not throw an error with valid input', () => {
        const hrPack = () => new PaymentPackage('HR', 10);
        expect(hrPack).to.not.throw();
    });
    it('should pass and not throw an error with null Number input', () => {
        const hrPack = () => new PaymentPackage('HR', 0);
        expect(hrPack).to.not.throw();
    });
});
describe("Test class with VAT property", () => {
    it("should pass and throw an error with empty String", () => {
        const hrPack = new PaymentPackage('HR', 10);
        expect(() => hrPack.VAT = '').to.throw();
    });
    it("should pass and throw an error with negative Number", () => {
        const hrPack = new PaymentPackage('HR', 10);
        expect(() => hrPack.VAT = -20).to.throw();
    });
    it("should pass and throw an error with Object", () => {
        const hrPack = new PaymentPackage('HR', 10);
        expect(() => hrPack.VAT = { '20': 20 }).to.throw();
    });
    it('should pass and not throw an error with valid input', () => {
        const hrPack = new PaymentPackage('HR', 10);
        expect(() => hrPack.VAT = 20).to.not.throw();
    });
});
describe("Test class with Active property", () => {
    it("should pass and throw an error with empty String", () => {
        const hrPack = new PaymentPackage('HR', 10);
        expect(() => hrPack.active = '').to.throw();
    });
    it("should pass and throw an error with negative Number", () => {
        const hrPack = new PaymentPackage('HR', 10);
        expect(() => hrPack.active = -20).to.throw();
    });
    it("should pass and throw an error with Object", () => {
        const hrPack = new PaymentPackage('HR', 10);
        expect(() => hrPack.active = { '20': 20 }).to.throw();
    });
    it('should pass and not throw an error with valid input', () => {
        const hrPack = new PaymentPackage('HR', 10);
        expect(() => hrPack.active = true).to.not.throw();
    });
});
describe('Test class with toString() method', () => {
    it('should pass and return a string with valid input', () => {
        const hrPack = new PaymentPackage('HR', 10);
        const output = `Package: HR\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`;
        expect(hrPack.toString()).to.equal(output);
    });
    it('should pass and return a string with valid input', () => {
        const hrPack = new PaymentPackage('HR', 10);
        hrPack.VAT = 50;
        const output = `Package: HR\n- Value (excl. VAT): 10\n- Value (VAT 50%): 15`;
        expect(hrPack.toString()).to.equal(output);
    });
    it('should pass and return a string with valid input', () => {
        const hrPack = new PaymentPackage('HR', 10);
        hrPack.active = false;
        const output = `Package: HR (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`;
        expect(hrPack.toString()).to.equal(output);
    });
    it('should throw error with invalid input', () => {
        const hrPack = new PaymentPackage('HR', 10);
        hrPack.VAT = 60;
        hrPack.active = false;
        const output = `Package: HR (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 60%): 16`;
        expect(hrPack.toString()).to.equal(output);
    });
});
describe('Test for class constructor', () => {
    it('Test for initial properties values', () => {
        let hrPack = new PaymentPackage('HR', 10);
        expect(hrPack.name).to.equal('HR');
        expect(hrPack.value).to.equal(10);
        expect(hrPack.VAT).to.equal(20);
        expect(hrPack.active).to.equal(true);
    });
});