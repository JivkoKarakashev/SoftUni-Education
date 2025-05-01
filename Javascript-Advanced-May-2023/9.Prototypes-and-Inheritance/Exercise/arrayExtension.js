(function arrayExtension() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, curr) => acc += curr, 0);
    }

    Array.prototype.average = function () {
        const sum = this.sum();
        return sum / this.length;
    }

    const arr = ["ant", "bison", "camel", "duck", "elephant"];
    const sumArr = [1, 2, 3, 4, 5, 6];
    const avgArr = [2, 4, 6, 8, 10, 12];
    const lastElement = arr.last();
    console.log(lastElement);
    console.log(`true === ${lastElement === 'elephant'}`);
    console.log('<------------------------------------>');
    const skippedArr = arr.skip(2);
    console.log(skippedArr);
    console.log(`true === ${skippedArr.join(', ') === 'camel, duck, elephant'}`);
    console.log('<------------------------------------>');
    const takedArr = arr.take(3);
    console.log(takedArr);
    console.log(`true === ${takedArr.join(', ') === 'ant, bison, camel'}`);
    console.log('<------------------------------------>');
    const summedArr = sumArr.sum();
    console.log(summedArr);
    console.log(`true === ${summedArr === 21}`);
    console.log('<------------------------------------>');
    const avaragedArr = avgArr.average();
    console.log(avaragedArr);
    console.log(`true === ${avaragedArr === 7}`);
    console.log('<------------------------------------>');
})();