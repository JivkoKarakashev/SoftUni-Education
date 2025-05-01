const bookSelection = require('./bookSelection');
const { expect } = require('chai');

describe("Test 'isGenreSuitable' method", () => {
    it("should pass and return 'not suitable'", () => {
        const result = bookSelection.isGenreSuitable('Thriller', 12);
        expect(result).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
    });
    it("should pass and return 'suitable'", () => {
        const result = bookSelection.isGenreSuitable('Thriller', 13);
        expect(result).to.equal('Those books are suitable');
    });
    it("should pass and return 'suitable'", () => {
        const result = bookSelection.isGenreSuitable('Comedy', 12);
        expect(result).to.equal('Those books are suitable');
    });
    it("should pass and return 'suitable'", () => {
        const result = bookSelection.isGenreSuitable('Comedy', 13);
        expect(result).to.equal('Those books are suitable');
    });
});
describe("Test 'isItAffordable' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with 'Strings' as arguments", () => {
            const result = () => bookSelection.isItAffordable('10', '10');
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Strings' as arguments", () => {
            const result = () => bookSelection.isItAffordable(10, '10');
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Strings' as arguments", () => {
            const result = () => bookSelection.isItAffordable('10', 10);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Objects' as arguments", () => {
            const result = () => bookSelection.isItAffordable({'10': 10}, 10);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Objects' as arguments", () => {
            const result = () => bookSelection.isItAffordable(10, {'10': 10});
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Arrays' as arguments", () => {
            const result = () => bookSelection.isItAffordable([10], 10);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Arrays' as arguments", () => {
            const result = () => bookSelection.isItAffordable(10, [10]);
            expect(result).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            const result = bookSelection.isItAffordable(10, 9);
            expect(result).to.equal('You don\'t have enough money');
        });
        it("should pass and return valid result", () => {
            const result = bookSelection.isItAffordable(10, 11);
            expect(result).to.equal('Book bought. You have 1$ left');
        });
        it("should pass and return valid result", () => {
            const result = bookSelection.isItAffordable(0, 0);
            expect(result).to.equal('Book bought. You have 0$ left');
        });
        it("should pass and return valid result", () => {
            const result = bookSelection.isItAffordable(-10, -9);
            expect(result).to.equal('Book bought. You have 1$ left');
        });
        it("should pass and return valid result", () => {
            const result = bookSelection.isItAffordable(-10, -11);
            expect(result).to.equal('You don\'t have enough money');
        });
    });
});
describe("Test 'suitableTitles' method", () => {
    describe("Test for valid input", () => {
        it("should pass and throw Error with 'Number' as argument", () => {
            const result = () => bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre: 'Thriller'}], 10);
            expect(result).to.throw();
        });
        it("should pass and not throw Error with number as 'String' argument", () => {
            const result = () => bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre: 'Thriller'}], '10');
            expect(result).to.not.throw();
        });
        it("should pass and throw Error with 'Object' as argument", () => {
            const result = () => bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre: 'Thriller'}], {genre: 'Thriller'});
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Array' as argument", () => {
            const result = () => bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre: 'Thriller'}], ['Thriller']);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' values as argument", () => {
            const result = () => bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre: 'Thriller'}], NaN);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' values as argument", () => {
            const result = () => bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre: 'Thriller'}], undefined);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' values as argument", () => {
            const result = () => bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre: 'Thriller'}], null);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' values as argument", () => {
            const result = () => bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre: 'Thriller'}], true);
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Number' as argument", () => {
            const result = () => bookSelection.suitableTitles(10, 'Thriller');
            expect(result).to.throw();
        });
        it("should pass and not throw Error with number in 'Array' argument", () => {
            const result = () => bookSelection.suitableTitles(['10'], 'Thriller');
            expect(result).to.not.throw();
        });
        it("should pass and throw Error with 'Object' as argument", () => {
            const result = () => bookSelection.suitableTitles({title: 'The Da Vinci Code', genre:'Thriller'}, 'Thriller');
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Array' as argument", () => {
            const result = () => bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre:'Thriller'}], 'Thriller');
            expect(result).to.not.throw();
        });
        it("should pass and throw Error with 'Special' value as argument", () => {
            const result = () => bookSelection.suitableTitles(NaN, 'Thriller');
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' value as argument", () => {
            const result = () => bookSelection.suitableTitles(undefined, 'Thriller');
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' value as argument", () => {
            const result = () => bookSelection.suitableTitles(null, 'Thriller');
            expect(result).to.throw();
        });
        it("should pass and throw Error with 'Special' value as argument", () => {
            const result = () => bookSelection.suitableTitles(true, 'Thriller');
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => bookSelection.suitableTitles({title: 'The Da Vinci Code', genre:'Thriller'}, {genre: 'Thriller'});
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => bookSelection.suitableTitles({title: 'The Da Vinci Code', genre:'Thriller'}, ['Thriller']);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => bookSelection.suitableTitles("title: 'The Da Vinci Code', genre:'Thriller'", [{genre: 'Thriller'}]);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => bookSelection.suitableTitles(NaN, NaN);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => bookSelection.suitableTitles(undefined, undefined);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => bookSelection.suitableTitles(null, null);
            expect(result).to.throw();
        });
        it("should pass and throw Error with two invalid arguments", () => {
            const result = () => bookSelection.suitableTitles(true, true);
            expect(result).to.throw();
        });
    });
    describe("Test for valid result", () => {
        it("should pass and return valid result", () => {
            const result = bookSelection.suitableTitles([{title: 'Book1', genre:'Thriller'}, {title: 'Book2', genre:'Thriller'}], 'Thriller');
            expect(result).to.deep.equal(['Book1', 'Book2']);
        });
        it("should pass and return valid result", () => {
            const result = bookSelection.suitableTitles([{title: 'Book1', genre:'Comedy'}, {title: 'Book2', genre:'Thriller'}], 'Thriller');
            expect(result).to.deep.equal(['Book2']);
        });
        it("should pass and return valid result", () => {
            const result = bookSelection.suitableTitles([{title: 'Book1', genre:'Comedy'}, {title: 'Book2', genre:'Horror'}], 'Thriller');
            expect(result).to.deep.equal([]);
        });
    });
});