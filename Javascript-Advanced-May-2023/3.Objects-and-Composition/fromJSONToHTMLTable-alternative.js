function fromJSONToHTMLTable(input) {

    const escapeHtml = (value) => {
        // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    
    const jsonParseArray = JSON.parse(input);
    const jsonParseArrayLength = jsonParseArray.length;

    const resultHtmlTableArray = [];
    resultHtmlTableArray.push('<table>')

    for (let i = 0; i < jsonParseArrayLength; i++) {
        let tableDataRowStr = '  <tr>';
        if (i === 0) {
            let tableHeaderStr = '  <tr>';
            const kvpArr = Object.entries(jsonParseArray[i]);
            for (let [header, data] of kvpArr) {
                tableHeaderStr = tableHeaderStr.concat(`<th>${header}</th>`);
                tableDataRowStr = tableDataRowStr.concat(`<td>${escapeHtml(data)}</td>`);
            }
            tableHeaderStr = tableHeaderStr.concat('</tr>');
            tableDataRowStr = tableDataRowStr.concat('</tr>');
            // console.log(tableHeaderStr);
            // console.log(tableDataRowStr);
            resultHtmlTableArray.push(JSON.parse(JSON.stringify(tableHeaderStr)));
            resultHtmlTableArray.push(JSON.parse(JSON.stringify(tableDataRowStr)));
            // console.log(resultHtmlTableArray.join('\n'));
        } else {
            for (const key in jsonParseArray[i]) {
                // console.log(inputArray[i][key]);
                let data = jsonParseArray[i][key];
                tableDataRowStr = tableDataRowStr.concat(`<td>${escapeHtml(data)}</td>`);
            }
            tableDataRowStr = tableDataRowStr.concat('</tr>');
            resultHtmlTableArray.push(tableDataRowStr);
        }
    }
    resultHtmlTableArray.push('</table>')
    
    return resultHtmlTableArray.join('\n');
}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5},{"Name": "Rumen","Score": 6}]`));
console.log('----------------------------------');
console.log(fromJSONToHTMLTable(`[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]`));
// console.log('----------------------------------');
// console.log(fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5},{"Name": "Rumen","Score": "6"}]`));