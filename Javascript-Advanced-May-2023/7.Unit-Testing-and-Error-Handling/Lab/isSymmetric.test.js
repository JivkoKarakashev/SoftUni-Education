const isSymmetric = require('./isSymmetric');
const { expect } = require('chai');

describe("Test for array argument", () => {
    it("should pass and return 'false' with Obj argument", () => {
        const obj = {'4': 4, '3': 3, '3': 3, '4': 4};
        expect(isSymmetric(obj)).to.equal(false);
    });
    it("should pass and return 'false' with String argument", () => {
        const str = 'MAAM';
        expect(isSymmetric(str)).to.equal(false);
    });
    it("should pass and return 'false' with Nums argument", () => {
        const nums = 4334;
        expect(isSymmetric(nums)).to.equal(false);
    });
});
describe("Test for array symmetric", () => {
    it("should pass and return 'true' with symmetric array as argument", () => {
        const arr = [4, 3, 3 ,4];
        expect(isSymmetric(arr)).to.equal(true);
    });
    it("should pass and return 'false' with asymmetric array as argument", () => {
        const arr = [1, 2, 3 ,4];
        expect(isSymmetric(arr)).to.equal(false);
    });
    it("should pass and return 'false' with asymmetric array as argument", () => {
        const arr = [4, 3, 3 ,'4'];
        expect(isSymmetric(arr)).to.equal(false);
    });
});