function addItem() {
    const inputFieldElement = document.querySelector('input#newItemText');  //value
    const ulFieldElelement = document.querySelector('ul#items'); //text
    const newLiElement = document.createElement('li');
    
    newLiElement.textContent = (inputFieldElement.value);
    ulFieldElelement.appendChild(newLiElement);
    inputFieldElement.value = '';
}