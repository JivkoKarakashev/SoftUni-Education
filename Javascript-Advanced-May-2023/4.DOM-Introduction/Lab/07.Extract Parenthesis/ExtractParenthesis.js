function extract(content) {

    content = document.querySelector('#content').textContent;
    // content = 'The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).';

    const regEx = /\((?<paran>[^)]+)\)/g;
    const resultArr = [];

    let match = regEx.exec(content);
    while (match) {
        resultArr.push(match.groups['paran']);
        match = regEx.exec(content);
    }

    // console.log(resultArr.join('; '));
    return resultArr.join('; ');
}

// extract()