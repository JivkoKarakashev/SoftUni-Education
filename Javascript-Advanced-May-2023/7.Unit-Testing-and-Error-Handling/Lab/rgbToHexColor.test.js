const rgbToHexColor = require('./rgbToHexColor');
const expect = require('chai').expect;

describe("Test for integers as arguments", () => {
    it("should pass and retrun 'undefined' with floating-point number", () => {
        expect(rgbToHexColor(249.1, 255, 255)).to.equal(undefined);
    });
    it("should pass with integers", () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
});
describe("Test for arguments type", () => {
    it("should pass and retrun 'undefined' with string", () => {
        expect(rgbToHexColor('255', 255, 255)).to.equal(undefined);
    });
    it("should pass and retrun 'undefined' with missing argument", () => {
        expect(rgbToHexColor(255, 255)).to.equal(undefined);
    });
    it("should pass with zero padding before single digit numbers", () => {
        expect(rgbToHexColor(05 ,05, 05)).to.equal('#050505');
    });
    it("should pass with zeroes", () => {
        expect(rgbToHexColor(0 ,0, 0)).to.equal('#000000');
    });
});
describe("Test for arguments range", () => {
    it("should pass and retrun 'undefined' with greater than 255", () => {
        expect(rgbToHexColor(256, 255, 255)).to.equal(undefined);
    });    
    expect(rgbToHexColor(-1, 255, 255)).to.equal(undefined);
    it("should pass and retrun 'undefined' with lower than 0", () => {
        expect(rgbToHexColor(-1, 255, 255)).to.equal(undefined);
    });
});