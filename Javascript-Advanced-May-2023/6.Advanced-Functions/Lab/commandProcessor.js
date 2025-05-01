function commandProcessor() {
    function solution() {
        let resultStr = '';
        const obj = {
            append(str) {
                resultStr = resultStr.concat(str);
                return resultStr;
            },
            removeStart(n) {
                resultStr = resultStr.substring(n);
                return resultStr;
            },
            removeEnd(n) {
                const resultStrLength = resultStr.length;
                resultStr = resultStr.substring(0, resultStrLength - n);
            },
            print() {
                return console.log(resultStr);
            }
        }
        return obj;
    }

    let firstZeroTest = solution();
    firstZeroTest.append('hello');
    firstZeroTest.append('again');
    firstZeroTest.removeStart(3);
    firstZeroTest.removeEnd(4);
    firstZeroTest.print();
    console.log('------------------');
    let secondZeroTest = solution();
    secondZeroTest.append('123');
    secondZeroTest.append('45');
    secondZeroTest.removeStart(2);
    secondZeroTest.removeEnd(1);
    secondZeroTest.print();
}

commandProcessor()