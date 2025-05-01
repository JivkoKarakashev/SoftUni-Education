function fromJSONToHTMLTable(jsonInput) {

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
    
    const resultHtmlTableArray = [];
    resultHtmlTableArray.push('<table>');

    const jsonParseArray = JSON.parse(jsonInput);
    const propertiesArr = Object.keys(jsonParseArray[0]);

    resultHtmlTableArray.push(`  <tr>${propertiesArr.map(prop => `<th>${prop}</th>`).join('')}</tr>`);
    // console.log(resultHtmlTableArray.join('\n'));

    for (const currObj of jsonParseArray) {
        resultHtmlTableArray.push(`  <tr>${propertiesArr.map(prop => `<td>${escapeHtml(currObj[prop])}</td>`).join('')}</tr>`);
    }
    resultHtmlTableArray.push('</table>');

    return resultHtmlTableArray.join('\n');
}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5},{"Name": "Rumen","Score": 6}]`));
console.log('----------------------------------');
console.log(fromJSONToHTMLTable(`[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]`));