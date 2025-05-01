function addItem() {
    const inputFieldElement = document.querySelector('input#newItemText');
    const ulItemsElement = document.querySelector('ul#items');

    const liElement = document.createElement('li');
    liElement.textContent = inputFieldElement.value;

    const anchorElement = document.createElement('a');
    anchorElement.href = '#';
    anchorElement.textContent = '[Delete]';
    anchorElement.addEventListener('click', (e) => {
        // console.log(e.currentTarget);
        e.currentTarget.parentElement.remove();
    });
    liElement.appendChild(anchorElement);
    ulItemsElement.appendChild(liElement);
    inputFieldElement.value = '';
}