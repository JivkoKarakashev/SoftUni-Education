function toggle() {
    let moreButton = document.querySelector('span.button');
    let extraText = document.querySelector('div #extra');
    if (moreButton.textContent === 'More') {
        moreButton.textContent = 'Less';
        extraText.style.display = 'block';
    } else if (moreButton.textContent === 'Less') {
        moreButton.textContent = 'More';
        extraText.style.display = 'none';
    }
}