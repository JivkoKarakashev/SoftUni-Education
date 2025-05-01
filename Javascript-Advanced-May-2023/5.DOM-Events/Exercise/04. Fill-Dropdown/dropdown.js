function addItem() {
    const selectElement = document.querySelector('select#menu');
    const inputTextElement = document.querySelector('input#newItemText');
    const inputValueElement = document.querySelector('input#newItemValue');
    
    const newOptionText = inputTextElement.value;
    const newOptionValue = inputValueElement.value;
    const newOptionElement = document.createElement('option');
    newOptionElement.textContent = newOptionText;
    newOptionElement.value = newOptionValue;
    selectElement.appendChild(newOptionElement);
    inputTextElement.value = '';
    inputValueElement.value = '';
}