function thePianist(inputArray){

    const add = (piecesLstMap, piece, composer, key) => {
        if (piecesLstMap.has(piece)) {
            console.log(`${piece} is already in the collection!`);
            return;
        }
        piecesLstMap.set(piece, []);
        piecesLstMap.get(piece).push(piece, composer, key);
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    }
    const remove = (piecesLstMap, piece) => {
        if (!piecesLstMap.has(piece)) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            return;
        }
        piecesLstMap.delete(piece);
        console.log(`Successfully removed ${piece}!`);
    }
    const changeKey = (piecesLstMap, piece, newKey) => {
        if (!piecesLstMap.has(piece)) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            return;
        }
        piecesLstMap.get(piece).splice(2, 1, newKey);
        console.log(`Changed the key of ${piece} to ${newKey}!`);
    }
    
    const piecesCount = Number(inputArray.shift());
    const piecesListMap = new Map;

    for (let i = 0; i < piecesCount; i++) {
        let [piece, composer, key] = inputArray.shift().split('|');
        if (!piecesListMap.has(piece)) {
            piecesListMap.set(piece, []);
        }
        piecesListMap.get(piece).push(piece, composer, key);
    }
    // console.log(piecesListMap);

    let currLine = inputArray.shift();
    while (currLine !== 'Stop') {
        let command, piece, composer, key, newKey;
        if (currLine.includes('Add')) {
            [command, piece, composer, key] = currLine.split('|');
        } else if (currLine.includes('Remove')) {
            [command, piece] = currLine.split('|');
        } else if (currLine.includes('ChangeKey')) {
            [command, piece, newKey] = currLine.split('|');
        }

        switch (command){
            case 'Add': add(piecesListMap, piece, composer, key); break;
            case 'Remove': remove(piecesListMap, piece); break;
            case 'ChangeKey': changeKey (piecesListMap, piece, newKey); break;
            default: ; break;
        }

        currLine = inputArray.shift()
    }
    // console.log(piecesListMap);

    const piecesListArr = piecesListMap.entries();
    // console.log(piecesListArr)

    for (let currPiece of piecesListArr) {
        console.log(`${currPiece[1][0]} -> Composer: ${currPiece[1][1]}, Key: ${currPiece[1][2]}`);
    }
}

thePianist(
[
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
])
console.log('----------------------------------------------------');
thePianist(
[
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])