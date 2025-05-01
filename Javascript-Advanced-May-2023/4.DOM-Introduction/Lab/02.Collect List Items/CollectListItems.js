function extractText() {

    const nodesRef = document.querySelectorAll('ul#items li');
    const textAreaRef = document.querySelector('#result');
    const nodesArr = [];

    for (let currNode of nodesRef) {
        nodesArr.push(currNode.textContent);
    }
    const resultStr = nodesArr.join('\n');
    textAreaRef.value = resultStr;
}