const flowerShop = require('./flowerShop');
const expect = require('chai').expect;

describe("Test 'calcPriceOfFlowers' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, 10)).to.not.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, 10.5)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, '10')).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, 'ten')).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, [10])).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, NaN)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, undefined)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, null)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, true)).to.throw();
            /////////////flowerShop.calcPriceOfFlowers/////////////////////////////
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, 10)).to.not.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5.5, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', '5', 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 'five', 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', [5], 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', NaN, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', undefined, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', null, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', true, 10)).to.throw();
            /////////////flowerShop.calcPriceOfFlowers/////////////////////////////
            expect(() => flowerShop.calcPriceOfFlowers(1, 5, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(1.3, 5, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('1', 5, 10)).to.not.throw();
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, 10)).to.not.throw();
            expect(() => flowerShop.calcPriceOfFlowers(['rose'], 5, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(NaN, 5, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 5, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(null, 5, 10)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(true, 5, 10)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(flowerShop.calcPriceOfFlowers('rose', 5, 10)).to.equal('You need $50.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 5, -10)).to.equal('You need $-50.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 5, 0)).to.equal('You need $0.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 5, 10)).to.equal('You need $50.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', -5, 10)).to.equal('You need $-50.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 0, 10)).to.equal('You need $0.00 to buy rose!');
        });
    });
});
describe("Test 'checkFlowersAvailable' method", () => {
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(flowerShop.checkFlowersAvailable('Olive', ['Rose', 'Lily', 'Orchid'])).to.equal('The Olive are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('Lily', ['Rose', 'Lily', 'Orchid'])).to.equal('The Lily are available!');
            expect(flowerShop.checkFlowersAvailable('Lily', [])).to.equal('The Lily are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('10', ['10', '20', '30'])).to.equal('The 10 are available!');
            expect(flowerShop.checkFlowersAvailable('40', ['10', '20', '30'])).to.equal('The 40 are sold! You need to purchase more!');
        });
    });
});
describe("Test 'sellFlowers' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1)).to.not.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1.5)).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 3)).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 0)).to.not.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], -1)).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], '1')).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 'one')).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], [1])).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], NaN)).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], undefined)).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], null)).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], true)).to.throw();
            /////////////flowerShop.sellFlowers/////////////////////////////
            expect(() => flowerShop.sellFlowers(5, 1)).to.throw();
            expect(() => flowerShop.sellFlowers(5.5, 1)).to.throw();
            expect(() => flowerShop.sellFlowers('5', 1)).to.throw();
            expect(() => flowerShop.sellFlowers('Rose', 'Lily', 'Orchid', 1)).to.throw();
            expect(() => flowerShop.sellFlowers({ Rose: 'Rose', Lily: 'Lily', Orchid: 'Orchid' }, 1)).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1)).to.not.throw();
            expect(() => flowerShop.sellFlowers(NaN, 1)).to.throw();
            expect(() => flowerShop.sellFlowers(undefined, 1)).to.throw();
            expect(() => flowerShop.sellFlowers(null, 1)).to.throw();
            expect(() => flowerShop.sellFlowers(true, 1)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1)).to.equal('Rose / Orchid');
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 0)).to.equal('Lily / Orchid');
            expect(() => flowerShop.sellFlowers([], 0)).to.throw();
        });
    });
});