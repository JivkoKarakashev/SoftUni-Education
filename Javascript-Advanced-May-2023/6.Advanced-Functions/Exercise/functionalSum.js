
function add(numA) {
    let sum = numA;
    function func(numB) {
        sum += numB;
        return func;
    }
    func.toString = () => { return sum };
    return func;
}

// let add = (function () {
//     let total = 0;
//     return function sum(a) {
//         total += a;
//         sum.toString = () => total;
//         return sum;
//     }
// })();

console.log(add(1)(6)(-3));