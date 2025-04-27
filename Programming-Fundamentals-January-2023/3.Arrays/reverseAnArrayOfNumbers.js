function reverseAnArrayOfNumbers(n, inputArray){

    let reverseArray = [];
    let currentElemet = '';
    let output = '';

    for (let j = n - 1; j >= 0; j--){
        // 1st solve methond using for loop and concatenation ==> join elements inside array into string
        // currentElemet = (`${inputArray[j]} `);

        // 2nd solve method using .join() method ==> join elements inside array into string
        currentElemet = (`${inputArray[j]}`);
        // console.log(currentElemet);
        reverseArray.push(currentElemet);
    }
    // console.log(reverseArray);

    // 1st solve methond using for loop and concatenation ==> join elements inside array into string
    // for (let i = 0; i < n; i++){
    //     output += reverseArray[i];
    // }
    // console.log(output);

    // 2nd solve method using .join() method ==> join elements inside array into string
    console.log(reverseArray.join(' '));    
}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])