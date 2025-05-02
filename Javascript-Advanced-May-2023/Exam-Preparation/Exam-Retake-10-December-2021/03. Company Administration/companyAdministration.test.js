const companyAdministration = require('./companyAdministration');
const expect = require('chai').expect;

describe("Test 'hiringEmployee' method", () => {
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(() => companyAdministration.hiringEmployee('Zhivko', 'Manager', 10)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('Zhivko', 'Programmer', 10)).to.not.throw('We are not looking for workers for this position.');
            expect(companyAdministration.hiringEmployee('Zhivko', 'Programmer', 3)).to.equal('Zhivko was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Zhivko', 'Programmer', -3)).to.equal('Zhivko is not approved for this position.');
            expect(companyAdministration.hiringEmployee('Zhivko', 'Programmer', 0)).to.equal('Zhivko is not approved for this position.');
            expect(companyAdministration.hiringEmployee('Zhivko', 'Programmer', NaN)).to.equal('Zhivko is not approved for this position.');
        });
    });
});
describe("Test 'calculateSalary' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => companyAdministration.calculateSalary(8)).to.not.throw();
            expect(() => companyAdministration.calculateSalary(4.5)).to.not.throw();
            expect(() => companyAdministration.calculateSalary(0)).to.not.throw();
            expect(() => companyAdministration.calculateSalary(-8)).to.throw();
            expect(() => companyAdministration.calculateSalary('8')).to.throw();
            expect(() => companyAdministration.calculateSalary('eight')).to.throw();
            expect(() => companyAdministration.calculateSalary('str')).to.throw();
            expect(() => companyAdministration.calculateSalary([8])).to.throw();
            expect(() => companyAdministration.calculateSalary({ 8: 8 })).to.throw();
            expect(() => companyAdministration.calculateSalary(NaN)).to.not.throw();
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw();
            expect(() => companyAdministration.calculateSalary(null)).to.throw();
            expect(() => companyAdministration.calculateSalary(true)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(160.5)).to.equal(3407.5);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
            expect(companyAdministration.calculateSalary(NaN)).to.be.NaN;
        });
    });
});
describe("Test 'firedEmployee' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 1)).to.not.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 0)).to.not.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 1.4)).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 3)).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], -1)).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], '1')).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 'one')).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 'str')).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], [1])).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], { 1: 1 })).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], NaN)).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], undefined)).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], null)).to.throw();
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], true)).to.throw();
            ///////////////////////////////////firedEmployee///////////////////
            expect(() => companyAdministration.firedEmployee(10, 0)).to.throw();
            expect(() => companyAdministration.firedEmployee('["Ivan"]', 0)).to.throw();
            expect(() => companyAdministration.firedEmployee(['Ivan'], 0)).to.not.throw();
            expect(() => companyAdministration.firedEmployee({'Ivan': 'Ivan'}, 0)).to.throw();
            expect(() => companyAdministration.firedEmployee(NaN, 0)).to.throw();
            expect(() => companyAdministration.firedEmployee(undefined, 0)).to.throw();
            expect(() => companyAdministration.firedEmployee(null, 0)).to.throw();
            expect(() => companyAdministration.firedEmployee(true, 0)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 1)).to.equal('Petar, George');
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 0)).to.equal('Ivan, George');
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 2)).to.equal('Petar, Ivan');
        });
    });
});