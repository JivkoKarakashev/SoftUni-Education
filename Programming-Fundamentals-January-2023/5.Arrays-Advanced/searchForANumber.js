function searchForANumber(numSequenceArray, commandArray){

    let [elementsToTake, elementsToDelete, searchNumber] = [...commandArray];
    let sortedArray = [];
    let repeatCount = 0;

    sortedArray = numSequenceArray
    .slice(0, elementsToTake)
    sortedArray.splice(0, elementsToDelete);
   for (el of sortedArray){
    if (el === searchNumber){
        repeatCount++;
    }
   }
    console.log(`Number ${searchNumber} occurs ${repeatCount} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])
    console.log('--------------------')
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])