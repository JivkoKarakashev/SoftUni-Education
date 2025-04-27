function theLift(inputArray) {

    let peoplesInQueue = Number(inputArray.shift());
    let liftWagonsArray = inputArray
        .join(' ')
        .split(' ');
    liftWagonsArray = liftWagonsArray.map(Number);
    let liftWagonsArrayLength = liftWagonsArray.length;
    let isQueueEmpty = false;
    let isLiftFull = false;
    let maxLiftCapacity = liftWagonsArrayLength * 4;
    // console.log(maxLiftCapacity)
    let sumLiftOccupancy = liftWagonsArray.reduce((sum, current) => sum += current, 0); 
    
    while (peoplesInQueue !== 0){
        for (let i = 0; i < liftWagonsArrayLength; i++){
            let currentWagon = liftWagonsArray[i];
            let emptySeats = 4 - currentWagon;
            if (emptySeats > peoplesInQueue){
                emptySeats = peoplesInQueue;
            }
            liftWagonsArray[i] = currentWagon + emptySeats;
            peoplesInQueue -= emptySeats;
            sumLiftOccupancy = liftWagonsArray.reduce((sum, current) => sum += current, 0);
            if (peoplesInQueue === 0){
                isQueueEmpty = true;
                if (sumLiftOccupancy === maxLiftCapacity){
                    isLiftFull = true;
                }
                break;
            }
            if (sumLiftOccupancy === maxLiftCapacity){
                if (peoplesInQueue === 0){
                    isQueueEmpty = true;
                }
                isLiftFull = true;
                break;
            }
        }
        if (isQueueEmpty || isLiftFull){
            break;
        }
    }
    if (isQueueEmpty && !isLiftFull){
        console.log(`The lift has empty spots!\n${liftWagonsArray.join(' ')}`);
    } else if(!isQueueEmpty && isLiftFull){
        console.log(`There isn't enough space! ${peoplesInQueue} people in a queue!\n${liftWagonsArray.join(' ')}`);
    } else if (isQueueEmpty && isLiftFull){
        console.log(`${liftWagonsArray.join(' ')}`);
    } else if (peoplesInQueue === 0){
        console.log(`The lift has empty spots!\n${liftWagonsArray.join(' ')}`);
    }
    // console.log(liftWagonsArray)
    // console.log(peoplesInQueue)
}

theLift([
    "15",
    "0 0 0 0"
])
console.log('-----------')
theLift([
    "20",
    "0 2 0"
   ])
console.log('-----------')
theLift([
    "0",
    "0 2 0"
   ])