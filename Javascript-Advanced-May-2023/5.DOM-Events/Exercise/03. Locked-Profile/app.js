function lockedProfile() {
    const showMoreButtonsElements = Array.from(document.querySelectorAll('button'));
    // console.log(showMoreButtonsElements);

    const showMoreButtonsEventHandler = (e) => {
        const lockStatus = e.currentTarget.parentElement.querySelector('[value=\'lock\']');
        const unlockStatus = e.currentTarget.parentElement.querySelector('[value=\'unlock\']');
        if (lockStatus.checked && !unlockStatus.checked) {
            return;
        } else {
            const hiddenFieldsElement = e.currentTarget.parentElement.querySelector('div [id*=\'user\']');
            if (e.currentTarget.textContent == 'Hide it') {
                hiddenFieldsElement.style.display = 'none';
                e.currentTarget.textContent = 'Show more';
            } else {
                hiddenFieldsElement.style.display = 'block';
                e.currentTarget.textContent = 'Hide it';
            }
        }
    };
    showMoreButtonsElements.map((butt) => butt.addEventListener('click', showMoreButtonsEventHandler));
}