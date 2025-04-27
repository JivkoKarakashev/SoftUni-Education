function nonDecreasingSubset(inputArrey){

    let nonDecreaseSubset = [];
    let currBiggestNum = Number(inputArrey[0]);
    nonDecreaseSubset.push(currBiggestNum);    

    for (let i = 1; i < inputArrey.length; i++){
        
        let currElement = Number(inputArrey[i]);

        if (currElement >= currBiggestNum) {
            nonDecreaseSubset.push(currElement);
            currBiggestNum = currElement;
        }
    }
    console.log(nonDecreaseSubset.join(' '));
}

nonDecreasingSubset([ 1, 2, 3, 4])