function hEX() {
    class Hex {
        // #hexTegEx = /^0X[0-9A-F]+$/;
        constructor(num) {
            this.value = num;
        }
        // isHex(num) {
        //     return this.#hexTegEx.test(num);
        // }
        valueOf() {
            return this.value;
        }
        toString() {
            if (this.value > Number.MAX_SAFE_INTEGER) {
                return BigInt(this.value).toString(16).toUpperCase();
            } else {
                return `0x${this.value.toString(16).toUpperCase()}`
            }
        }
        plus(num) {
            const decimalSum = Number(this.value.toString()) + Number(num.toString());
            // return `0x${decimalSum.toString(16).toUpperCase()}`;
            return new Hex(decimalSum);
        }
        minus(num) {
            const decimalSum = Number(this.value.toString()) - Number(num.toString());
            // return `0x${decimalSum.toString(16).toUpperCase()}`;
            return new Hex(decimalSum);
        }
        parse(str) {
            return parseInt(str, 16);
        }
    }

    let FF = new Hex(255);
    console.log(FF.toString());
    FF.valueOf() + 1 == 256;
    let a = new Hex(10);
    let b = new Hex(5);
    console.log(a.plus(b).toString());
    console.log(a.plus(b).toString() === '0xF');
    console.log(FF.parse('AAA'));
}

hEX()