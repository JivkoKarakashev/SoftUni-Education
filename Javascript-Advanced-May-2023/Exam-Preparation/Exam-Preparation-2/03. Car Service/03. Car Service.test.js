const carService = require('./03. Car Service');
const expect = require('chai').expect;

describe("Test 'isItExpensive' method", () => {
    it("should pass and return 'will cost more money'", () => {
        const result = carService.isItExpensive('Engine');
        expect(result).to.equal('The issue with the car is more severe and it will cost more money');
    });
    it("should pass and return 'will cost more money'", () => {
        const result = carService.isItExpensive('Transmission');
        expect(result).to.equal('The issue with the car is more severe and it will cost more money');
    });
    it("should pass and return 'will be a bit cheaper'", () => {
        const result = carService.isItExpensive('body');
        expect(result).to.equal('The overall price will be a bit cheaper');
    });
});
describe("Test 'discount' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with 'Strings' as arguments", () => {
            const result = () => carService.discount('5', '100');
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Strings' as arguments", () => {
            const result = () => carService.discount(5, '10');
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Strings' as arguments", () => {
            const result = () => carService.discount('5', 10);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Objects' as arguments", () => {
            const result = () => carService.discount({ '5': 10 }, 10);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Objects' as arguments", () => {
            const result = () => carService.discount(5, { '10': 10 });
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Arrays' as arguments", () => {
            const result = () => carService.discount([5], 10);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Arrays' as arguments", () => {
            const result = () => carService.discount(5, [10]);
            expect(result).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            const result = carService.discount(2, 10);
            expect(result).to.equal('You cannot apply a discount');
        });
        it("should pass and return valid result", () => {
            const result = carService.discount(-7, 10);
            expect(result).to.equal('You cannot apply a discount');
        });
        it("should pass and return valid result", () => {
            const result = carService.discount(5, 10);
            expect(result).to.equal('Discount applied! You saved 1.5$');
        });
        it("should pass and return valid result", () => {
            const result = carService.discount(8, 10);
            expect(result).to.equal('Discount applied! You saved 3$');
        });
        it("should pass and return valid result", () => {
            const result = carService.discount(0, 0);
            expect(result).to.equal('You cannot apply a discount');
        });
        it("should pass and return valid result", () => {
            const result = carService.discount(-5, -10);
            expect(result).to.equal('You cannot apply a discount');
        });
        it("should pass and return valid result", () => {
            const result = carService.discount(5, -10);
            expect(result).to.equal('Discount applied! You saved -1.5$');
        });
    });
});
describe("Test 'partsToBuy' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with 'Number' as argument", () => {
            const result = () => carService.partsToBuy([{part: 'blowoff valve', price: 145}], 10);
            expect(result).to.throw();
        });
        it("should pass and not throw Error with number as 'String' argument", () => {
            const result = () => carService.partsToBuy([{part: 'blowoff valve', price: 145}], 'blowoff valve');
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Object' as argument", () => {
            const result = () => carService.partsToBuy([{part: 'blowoff valve', price: 145}], {'blowoff valve': 'blowoff valve'});
            expect(result).to.throw();
        });
        it("should pass and not throw Error with 'Array' as argument", () => {
            const result = () => carService.partsToBuy([{part: 'blowoff valve', price: 145}], ['blowoff valve']);
            expect(result).to.not.throw();
        });
        it("should pass and throw Error with 'Special' values as argument", () => {
            const result = () => carService.partsToBuy([{part: 'blowoff valve', price: 145}], NaN);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' values as argument", () => {
            const result = () => carService.partsToBuy([{part: 'blowoff valve', price: 145}], undefined);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' values as argument", () => {
            const result = () => carService.partsToBuy([{part: 'blowoff valve', price: 145}], null);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' values as argument", () => {
            const result = () => carService.partsToBuy([{part: 'blowoff valve', price: 145}], true);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Number' as argument", () => {
            const result = () => carService.partsToBuy(10, ['blowoff valve']);
            expect(result).to.throw();
        });
        it("should pass and not throw Error with number in 'Array' argument", () => {
            const result = () => carService.partsToBuy(['10'], ['blowoff valve']);
            expect(result).to.not.throw();
        });
        it("should pass and throw Error with 'Object' as argument", () => {
            const result = () => carService.partsToBuy({part: 'blowoff valve', price: 145}, ['blowoff valve']);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Array' as argument", () => {
            const result = () => carService.partsToBuy([{part: 'blowoff valve', price: 145}], ['blowoff valve']);
            expect(result).to.not.throw();
        });
        it("should pass and throw Error with 'Special' value as argument", () => {
            const result = () => carService.partsToBuy(NaN, ['blowoff valve']);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' value as argument", () => {
            const result = () => carService.partsToBuy(undefined, ['blowoff valve']);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' value as argument", () => {
            const result = () => carService.partsToBuy(null, ['blowoff valve']);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' value as argument", () => {
            const result = () => carService.partsToBuy(true, ['blowoff valve']);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => carService.partsToBuy({part: 'blowoff valve', price: 145}, {'blowoff valve': 'blowoff valve'});
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => carService.partsToBuy("{part: 'blowoff valve', price: 145}", "['blowoff valve']");
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => carService.partsToBuy(10, 10);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => carService.partsToBuy(NaN, NaN);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => carService.partsToBuy(undefined, undefined);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => carService.partsToBuy(null, null);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => carService.partsToBuy(true, true);
            expect(result).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            const result = carService.partsToBuy([{part: '1', price: 145}], ['1']);
            expect(result).to.equal(145);
        });
        it("should pass and return valid result", () => {
            const result = carService.partsToBuy([{part: '1', price: 5}, {part: '2', price: 10}], ['1', '2']);
            expect(result).to.equal(15);
        });
        it("should pass and return valid result", () => {
            const result = carService.partsToBuy([], ['1']);
            expect(result).to.equal(0);
        });
    });
});