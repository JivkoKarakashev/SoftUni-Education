function solution(num) {
    function add(a, b) {
        return a + b;
    }
    return (x) => add(x, num);
}
let add5 = solution(5)(5);
console.log(add5);
// console.log(add5(2));
// console.log(add5(3));