function solve() {
  const textAreaValue = document.querySelector('div#exercise textarea#input').value;
  const textAreaValueArr = textAreaValue.split('.').filter(sent => sent.length > 0);
  const textAreaValueArrLength = textAreaValueArr.length;
  let paragraphContentArr = [];

  for (let i = 0; i < textAreaValueArrLength; i++) {
    let currSentence = textAreaValueArr[i];
    paragraphContentArr.push(currSentence);
    if (paragraphContentArr.length % 3 === 0 || i === textAreaValueArrLength - 1) {
      const node = document.createElement('p');
      let text = paragraphContentArr.join('.').concat('.');
      const textNode = document.createTextNode(text);
      node.appendChild(textNode);
      document.querySelector('div#output').appendChild(node);
      paragraphContentArr = [];
    }
  }
}

// solve()