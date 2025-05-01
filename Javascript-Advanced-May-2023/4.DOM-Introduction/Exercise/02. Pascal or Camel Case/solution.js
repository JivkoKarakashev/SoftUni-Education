function solve() {

  let firstString = document.querySelector('#text').value;
  let applyType = document.querySelector('#naming-convention').value;

  if (applyType !== 'Camel Case' && applyType !== 'Pascal Case') {
    document.querySelector('#result').textContent = 'Error!';
    return;
  }

  function camelCase(str) {
    let resultStr = '';
    const strArr = str.split(' ');
    const strArrLength = strArr.length;
    for (let i = 0; i < strArrLength; i++) {
      let currWord = strArr[i];
      if (i === 0) {
        resultStr += currWord.toLowerCase();
      } else {
        let firstChar = currWord[0].toUpperCase();
        let rest = currWord.slice(1).toLowerCase();
        resultStr += (firstChar.concat(rest));
      }
    }
    return resultStr;
  }
  function pascalCase(str) {
    let resultStr = '';
    const strArr = str.split(' ');
    const strArrLength = strArr.length;
    for (let i = 0; i < strArrLength; i++) {
      let currWord = strArr[i];
      let firstChar = currWord[0].toUpperCase();
      let rest = currWord.slice(1).toLowerCase();
      resultStr += (firstChar.concat(rest));
    }
    return resultStr;
  }

  const namingConventionObj = {
    'Camel Case': camelCase(firstString),
    'Pascal Case': pascalCase(firstString),
  }
  document.querySelector('#result').textContent = namingConventionObj[applyType];
}
