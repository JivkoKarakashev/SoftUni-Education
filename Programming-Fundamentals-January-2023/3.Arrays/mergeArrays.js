function mergeArrays(arr1, arr2){

    let newArray = [];

    for (let i = 0; i <= arr1.length - 1; i++){
        if (i % 2 === 0){
            arr1[i] = Number(arr1[i]);
            arr2[i] = Number(arr2[i]);
        } else {
            arr1[i] = String(arr1[i]);
            arr2[i] = String(arr2[i]);
        }
        newArray[i] = arr1[i] + arr2[i];
    }
    console.log(newArray.join(' - '))
}

mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])