const library = require('./library');
const expect = require('chai').expect;

describe("Test 'calcPriceOfBook' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => library.calcPriceOfBook('Troy', 1513)).to.not.throw();
            expect(() => library.calcPriceOfBook('Troy', 1513.5)).to.throw();
            expect(() => library.calcPriceOfBook('Troy', '1513')).to.throw();
            expect(() => library.calcPriceOfBook('Troy', 'year')).to.throw();
            expect(() => library.calcPriceOfBook('Troy', [1513])).to.throw();
            expect(() => library.calcPriceOfBook('Troy', { 1513: 1513 })).to.throw();
            expect(() => library.calcPriceOfBook('Troy', NaN)).to.throw();
            expect(() => library.calcPriceOfBook('Troy', undefined)).to.throw();
            expect(() => library.calcPriceOfBook('Troy', null)).to.throw();
            expect(() => library.calcPriceOfBook('Troy', true)).to.throw();
            /////////////library.calcPriceOfBook////////////////////////
            expect(() => library.calcPriceOfBook(10, 1513)).to.throw();
            expect(() => library.calcPriceOfBook('10', 1513)).to.not.throw();
            expect(() => library.calcPriceOfBook('Troy', 1513)).to.not.throw();
            expect(() => library.calcPriceOfBook(['Troy'], 1513)).to.throw();
            expect(() => library.calcPriceOfBook({ Troy: 'Troy' }, 1513)).to.throw();
            expect(() => library.calcPriceOfBook(NaN, 1513)).to.throw();
            expect(() => library.calcPriceOfBook(undefined, 1513)).to.throw();
            expect(() => library.calcPriceOfBook(null, 1513)).to.throw();
            expect(() => library.calcPriceOfBook(true, 1513)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(library.calcPriceOfBook('Troy', 1981)).to.equal('Price of Troy is 20.00');
            expect(library.calcPriceOfBook('Troy', 1980)).to.equal('Price of Troy is 10.00');
            expect(library.calcPriceOfBook('Troy', 0)).to.equal('Price of Troy is 10.00');
            expect(library.calcPriceOfBook('Troy', -1981)).to.equal('Price of Troy is 10.00');
        });
    });
});
describe("Test 'findBook' method", () => {
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(() => library.findBook([], 'Troy')).to.throw('No books currently available');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'War and Peace')).to.equal('The book you are looking for is not here!');
        });
    });
});
describe("Test 'arrangeTheBooks' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with Invalid argument", () => {
            expect(() => library.arrangeTheBooks(10)).to.not.throw();
            expect(() => library.arrangeTheBooks(0)).to.not.throw();
            expect(() => library.arrangeTheBooks(-10)).to.throw();
            expect(() => library.arrangeTheBooks(10.5)).to.throw();
            expect(() => library.arrangeTheBooks('ten')).to.throw();
            expect(() => library.arrangeTheBooks([10])).to.throw();
            expect(() => library.arrangeTheBooks({ 10: 10 })).to.throw();
            expect(() => library.arrangeTheBooks(NaN)).to.throw();
            expect(() => library.arrangeTheBooks(undefined)).to.throw();
            expect(() => library.arrangeTheBooks(null)).to.throw();
            expect(() => library.arrangeTheBooks(true)).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});