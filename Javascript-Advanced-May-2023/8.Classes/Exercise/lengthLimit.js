function lengthLimit() {

    class Stringer {
        #innerString;
        #length;
        constructor(string, length) {
            this.innerString = string;
            this.innerLength = Math.max(0, length);
            this.#innerString = string
            this.#length = this.#innerString.length;
        }
        increase(value) {
            this.innerLength += value;
        }
        decrease(value) {
            this.innerLength = Math.max(0, this.innerLength - value);
        }
        toString() {
            if (this.#length > this.innerLength) {
                return `${this.#innerString.slice(0, this.innerLength)}...`;
            } else {
                return `${this.#innerString}`;
            }
        }
    }


    let test = new Stringer("Test", 5);
    console.log(test.toString()); // Test 
    test.decrease(3);
    console.log(test.toString()); // Te... 
    test.decrease(5);
    console.log(test.toString()); // ... 
    test.increase(4);
    console.log(test.toString()); // Test
}

lengthLimit()