const motorcycleRider = require('./Motorcycle Rider');
const expect = require('chai').expect;

describe("Test 'licenseRestriction' method", () => {
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
            expect(() => motorcycleRider.licenseRestriction(10)).to.throw();
            expect(() => motorcycleRider.licenseRestriction('10')).to.throw();
            expect(() => motorcycleRider.licenseRestriction('AMA2')).to.throw();
            expect(() => motorcycleRider.licenseRestriction(['AM'])).to.throw();
            expect(() => motorcycleRider.licenseRestriction(NaN)).to.throw();
            expect(() => motorcycleRider.licenseRestriction(undefined)).to.throw();
            expect(() => motorcycleRider.licenseRestriction(null)).to.throw();
            expect(() => motorcycleRider.licenseRestriction(true)).to.throw();
        });
    });
});
describe("Test 'motorcycleShowroom' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => motorcycleRider.motorcycleShowroom([30], 50)).to.not.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], '50')).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], 'petdeset')).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], [50])).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], NaN)).to.not.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], undefined)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], null)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], true)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], 49)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], 0)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], -50)).to.throw();
            /////////////motorcycleRider.motorcycleShowroom////////////////////////
            expect(() => motorcycleRider.motorcycleShowroom(30, 50)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom('[30]', 50)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom('trideset', 50)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([30], 50)).to.not.throw();
            expect(() => motorcycleRider.motorcycleShowroom(NaN, 50)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom(undefined, 50)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom(null, 50)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom(true, 50)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([], 50)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([0], 50)).to.not.throw();
            expect(() => motorcycleRider.motorcycleShowroom([-30], 50)).to.not.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(motorcycleRider.motorcycleShowroom([50, 60, 70], 100,)).to.equal('There are 3 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([50, 60, 70], 60,)).to.equal('There are 2 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([50, 60, 70], 50,)).to.equal('There are 1 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([60, 70, 80], 50,)).to.equal('There are 0 available motorcycles matching your criteria!');
        });
    });
});
describe("Test 'otherSpendings' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => motorcycleRider.otherSpendings([], [], 10)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], 'true')).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], 'str')).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], [true])).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], NaN)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], undefined)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], null)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], true)).to.not.throw();
            expect(() => motorcycleRider.otherSpendings([], [], 0)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], -10)).to.throw();
            /////////////motorcycleRider///////////////////////////////////////
            expect(() => motorcycleRider.otherSpendings([], 10, true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], '[]', true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], '[sto]', true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], true)).to.not.throw();
            expect(() => motorcycleRider.otherSpendings([], NaN, true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], undefined, true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], null, true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], true, true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], 0, true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], -10, true)).to.throw();
            // //////////motorcycleRider//////////////////////////////////////////
            expect(() => motorcycleRider.otherSpendings(10, [], true)).to.throw();
            expect(() => motorcycleRider.otherSpendings('10', [], true)).to.throw();
            expect(() => motorcycleRider.otherSpendings('deset', [], true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], true)).to.not.throw();
            expect(() => motorcycleRider.otherSpendings(NaN, [], true)).to.throw();
            expect(() => motorcycleRider.otherSpendings(undefined, [], true)).to.throw();
            expect(() => motorcycleRider.otherSpendings(null, [], true)).to.throw();
            expect(() => motorcycleRider.otherSpendings(true, [], true)).to.throw();
            expect(() => motorcycleRider.otherSpendings(0, [], true)).to.throw();
            expect(() => motorcycleRider.otherSpendings(-10, [], true)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], false)).to.equal('You spend $570.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], [], false)).to.equal('You spend $500.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet'], [], false)).to.equal('You spend $200.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings([], [], false)).to.equal('You spend $0.00 for equipment and consumables!');

            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], true)).to.equal('You spend $513.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], [], true)).to.equal('You spend $450.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['helmet'], [], true)).to.equal('You spend $180.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings([], [], true)).to.equal('You spend $0.00 for equipment and consumables with 10% discount!');
        });
    });
}); 