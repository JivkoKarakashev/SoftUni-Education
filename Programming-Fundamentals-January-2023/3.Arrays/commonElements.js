function commonElements(arr1, arr2){

    let externArray = [];
    let internArray = [];
    if (arr1.length >= arr2.length){
        externArray = [...arr1];
        internArray = [... arr2];
    }   else {
        externArray = [...arr2];
        internArray = [...arr1];
    }

    for (let i = 0; i <= externArray.length - 1; i++){
        let currExternElelemt = externArray[i];
        for (let j = 0; j <= internArray.length - 1; j++){
            let currInternElement = internArray[j];
            if (currExternElelemt === currInternElement){
                console.log(currExternElelemt)
            }
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)