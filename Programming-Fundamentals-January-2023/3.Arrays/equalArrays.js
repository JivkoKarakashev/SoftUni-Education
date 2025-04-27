function equalArrays(arr1, arr2){

    let areNotEqual = false;
    let sum = 0;

    for (let i = 0; i <= arr1.length - 1; i++){
        let currElementArr1 = Number(arr1[i]);
        arr1[i] = currElementArr1;        
    }

    for (let i = 0; i <= arr2.length - 1; i++){
        let currElementArr2 = Number(arr2[i]);
        arr2[i] = currElementArr2;        
    }

    for (let i = 0; i <= arr1.length - 1; i++){
        if (arr1[i] !== arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areNotEqual = true;
            break;
        }
        sum += arr2[i];
    }
    if (!areNotEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

equalArrays(['1'], ['10'])