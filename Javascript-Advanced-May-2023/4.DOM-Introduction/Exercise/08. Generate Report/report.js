function generateReport() {
    const tableHeaderNodesArr = Array.from(document.querySelectorAll('table thead tr > th'));
    const tableHeaderNodesArrLength = tableHeaderNodesArr.length;
    const tableRowsNodesArr = Array.from(document.querySelectorAll('table tbody > tr'));
    const tableRowsNodesArrLength = tableRowsNodesArr.length;
    const targetTxtArea = document.querySelector('div textarea#output');
    const checkedColumnsMap = new Map;
    const resultObjsArray = [];
    const objCreator = (kvpArr) => {
        const rowEntriesObj = new Object();
        for (const kvp of kvpArr) {
            rowEntriesObj[kvp[0]] = kvp[1];
        }
        return rowEntriesObj;
    }
    // alert (tableHeaderNodesArr[0].children[0].checked);

    for (let i = 0; i < tableHeaderNodesArrLength; i++) {
        if ((tableHeaderNodesArr[i].children[0].checked)) {
            const columnName = tableHeaderNodesArr[i].children[0].name;
            checkedColumnsMap.set(columnName, []);
            for (let j = 0; j < tableRowsNodesArrLength; j++) {
                let currRowCellData = tableRowsNodesArr[j].children[i].textContent.trim();
                checkedColumnsMap.get(columnName).push(currRowCellData);
            }
        }
    }
    // console.log(checkedColumnsMap);
    // const checkedColumnsEntries = checkedColumnsMap.entries();
    // console.log(checkedColumnsEntries);
    // console.log(checkedColumnsMap.size);
    for (let i = 0; i < tableRowsNodesArrLength; i++) {
        const kvpArr = [];
        // console.log(`${checkedColumnsEntries[0]} -> ${checkedColumnsEntries[1]}`);
        for (let kvp of checkedColumnsMap.entries()) {
            kvpArr.push([kvp[0], kvp[1][i]]);
            // console.log(`${kvp[0]} -> ${kvp[1][i]}`);
        }
        resultObjsArray.push(objCreator(kvpArr));
    }
    // console.log(resultObjsArray);
    targetTxtArea.value = JSON.stringify(resultObjsArray);
}