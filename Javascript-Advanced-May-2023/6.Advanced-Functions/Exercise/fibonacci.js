function getFibonator() {
    const fibonacciArr = [0, 1];
    return () => {
        let newFibonacci = fibonacciArr.slice(-2).reduce((acc, el) => acc += el, 0);
        fibonacciArr.push(newFibonacci);
        return fibonacciArr[fibonacciArr.length - 2];        
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

