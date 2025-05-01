(function stringExtension() {

    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return String(this);
        } else {
            return str.concat(this);
        }
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return String(this);
        } else {
            return this.concat(str);
        }
    }

    String.prototype.isEmpty = function () {
        return this.length === 0;
    }

    String.prototype.truncate = function (n) {
        let newString = this.slice(0, n);
        if (newString.length < n) {
            return newString;
        } else {
            if (!newString.includes(' ')) {
                if (n < 4) {
                    return '.'.repeat(n);
                }
                return newString = newString.slice(0, n - 3).concat('.'.repeat(3));
            }
            const strArr = this.split(' ');
            newString = strArr[0];
            for (let i = 0; i < strArr.length; i += 2) {
                const nextString = newString.concat(` ${strArr[i + 1]}`);
                if (nextString.length + 3 > n) {
                    break;
                }
                newString = nextString;
            }
            return newString.concat('.'.repeat(3));
        }
    }

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }

    let str = 'my string';
    str = str.ensureStart('my');
    console.log(str);
    console.log(`true === ${str === 'my string'}`);
    console.log('<------------------------->');
    str = str.ensureStart('hello ');
    console.log(str);
    console.log(`true === ${str === 'hello my string'}`);
    console.log('<------------------------->');
    // str = str.ensureEnd('string');
    // console.log(str);
    // console.log(`true === ${str === 'my string'}`);
    // console.log('<------------------------->');
    // str = str.ensureEnd(' is Hello');
    // console.log(str);
    // console.log(`true === ${str === 'my string is Hello'}`);
    // console.log('<------------------------->');
    // str = '';
    // console.log(str);
    // console.log(`true === ${str.isEmpty() === true}`);
    // console.log('<------------------------->');
    // str = str.truncate(16);
    // console.log(str);
    // console.log(`true === ${str === 'hello my string'}`);
    // console.log('<------------------------->');
    // str = str.truncate(14);
    // console.log(str);
    // console.log(`true === ${str === 'hello my...'}`);
    // console.log('<------------------------->');
    // str = str.truncate(8);
    // console.log(str);
    // console.log(`true === ${str === 'hello...'}`);
    // console.log('<------------------------->');
    // str = str.truncate(4);
    // console.log(str);
    // console.log(`true === ${str === 'h...'}`);
    // console.log('<------------------------->');
    // str = str.truncate(2);
    // console.log(str);
    // console.log(`true === ${str === '..'}`);
    // console.log('<------------------------->');
    // str = String.format('The {0} {1} fox', 'quick', 'brown');
    // console.log(str);
    // console.log(`true === ${str === 'The quick brown fox'}`);
    // console.log('<------------------------->');
    // str = String.format('jumps {0} {1}', 'dog');
    // console.log(str);
    // console.log(`true === ${str === 'jumps dog {1}'}`);
    // console.log('<------------------------->');
})();