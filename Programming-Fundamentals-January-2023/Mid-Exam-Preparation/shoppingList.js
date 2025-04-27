function shoppingList(inputArray){

    let shopListArray = inputArray
    .shift()
    .split('!');

    let urgent = (arr, itm) =>{
        if (arr.includes(itm)){
            return arr;
        } else {
            arr.unshift(itm);
        }
        return arr;
    }
    let unnecessary = (arr, itm) =>{
        if (arr.includes(itm)){
            let idxOfItm = arr.indexOf(itm);
            arr.splice(idxOfItm, 1);
        } else {
            return arr;
        }
        return arr;
    }
    let correct = (arr, itm, newItm) =>{
        if (arr.includes(itm)){
            let idxOfItm = arr.indexOf(itm);
            arr.splice(idxOfItm, 1, newItm);
        } else {
            return arr;
        }
        return arr;
    }
    let rearrange = (arr, itm) =>{
        if (arr.includes(itm)){
            let idxOfItm = arr.indexOf(itm);
            let rearrangedItm = arr.splice(idxOfItm, 1);
            arr.push(rearrangedItm);
        } else {
            return arr;
        }
        return arr;
    }

    let index = 0;
    let currentLineArray = inputArray[index].split(' ');
    let command = currentLineArray[index];

    while (command !== 'Go Shopping!'){
        let item;
        let newItem;
        if (command === 'Correct'){
            [, item, newItem] = [...currentLineArray];            
        } else {
            [, item] = [...currentLineArray];
        }

        switch (command){
            case 'Urgent': urgent(shopListArray, item); break;
            case 'Unnecessary': unnecessary(shopListArray, item); break;
            case 'Correct': correct(shopListArray, item, newItem); break;
            case 'Rearrange': rearrange(shopListArray, item); break;
            default: ; break;
        }
        index++;
        currentLineArray = inputArray[index].split(' ');
        if (currentLineArray.includes('Shopping!')){
            command = currentLineArray[index];
            break;
        }
        command = currentLineArray[0];
    }
    console.log(shopListArray.join(', '))
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
console.log('--------------------------------')
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])