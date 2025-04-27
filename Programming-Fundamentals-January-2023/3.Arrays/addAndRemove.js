function addAndRemove(inputArray){

    let initNum = 1;
    let newArray = [];
    
    for (let i = 0; i < inputArray.length; i++){
        let command = inputArray[i];
               
        switch (command){
            case 'add': newArray.push(initNum); break;
            case 'remove': newArray.splice(newArray.length - 1, 1); break;
            default: ; break;
        }
        initNum++;
    }
    if (newArray.length > 0){
        console.log(newArray.join(' '))
    } else {
        console.log(`Empty`)
    }
}

addAndRemove(['remove', 'remove', 'remove'])