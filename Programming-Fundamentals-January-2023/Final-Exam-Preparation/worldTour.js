function worldTour(inputArray) {

    const addStop = (wldTrStopListStr, idx, subStr) => {
        idx = Number(idx);
        let wldTrStopListStrLength = wldTrStopListStr.length;
        if (idx < 0 || idx >= wldTrStopListStrLength) {
            console.log(wldTrStopListStr);
            return wldTrStopListStr;
        }
        let subStr1 = wldTrStopListStr.substring(0, idx);
        let subStr2 = subStr;
        let subStr3 = wldTrStopListStr.substring(idx);
        wldTrStopListStr = subStr1.concat(subStr2, subStr3);
        console.log(wldTrStopListStr);
        return wldTrStopListStr;
    }
    const removeStop = (wldTrStopListStr, startIdx, endIdx) => {
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);
        let wldTrStopListStrLength = wldTrStopListStr.length;
        if (startIdx < 0 || startIdx >= wldTrStopListStrLength || endIdx < 0 || endIdx >= wldTrStopListStrLength) {
            console.log(wldTrStopListStr);
            return wldTrStopListStr;
        }
        let remStr = wldTrStopListStr.substring(startIdx, endIdx + 1);
        wldTrStopListStr = wldTrStopListStr.replace(remStr, "");
        console.log(wldTrStopListStr);
        return wldTrStopListStr;
    }
    const switchCmd = (wldTrStopListStr, subStr, newSubStr) => {
        if (!wldTrStopListStr.includes(subStr)) {
            console.log(wldTrStopListStr);
            return wldTrStopListStr;
        }
        if (wldTrStopListStr.includes(subStr)) {
            wldTrStopListStr = wldTrStopListStr.split(subStr).join(newSubStr);
        }

        console.log(wldTrStopListStr);
        return wldTrStopListStr;
    }

    let worldTourStopListStr = inputArray.shift();

    let currLine = inputArray.shift();
    while (currLine !== 'Travel') {
        let command, index, subString, startIdx, endIdx, newSubString;
        if (currLine.includes('Add Stop')) {
            [command, index, subString] = currLine.split(':');
        } else if (currLine.includes('Remove Stop')) {
            [command, startIdx, endIdx] = currLine.split(':');
        } else if (currLine.includes('Switch')) {
            [command, subString, newSubString] = currLine.split(':');
        }

        switch (command) {
            case 'Add Stop': worldTourStopListStr = addStop(worldTourStopListStr, index, subString); break;
            case 'Remove Stop': worldTourStopListStr = removeStop(worldTourStopListStr, startIdx, endIdx); break;
            case 'Switch': worldTourStopListStr = switchCmd(worldTourStopListStr, subString, newSubString); break;
        }
        currLine = inputArray.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${worldTourStopListStr}`);
}

worldTour(
    [
        "Hawai::Cyprys-Greece",
        "Add Stop:7:Rome",
        "Remove Stop:11:16",
        "Switch:Hawai:Bulgaria",
        "Travel"
    ])
console.log('------------------------------------------');
worldTour(
    [
        "Albania:Bulgaria:Cyprus:Deuchland",
        "Add Stop:3:Nigeria",
        "Remove Stop:4:8",
        "Switch:Albania: Azərbaycan",
        "Travel"
    ])
console.log('------------------------------------------');
worldTour(
    [
        "Hawai:Hawai:Hawai::Cyprys-Greece",
        "Switch:Hawai:Bulgaria",
        "Travel"
    ])
