function deleteByEmail() {
    const emailInputElement = document.querySelector('label [name="email"]');
    const tableContentElements = document.querySelectorAll('tbody tr td:nth-child(2n)');
    const resultElement = document.querySelector('div#result');
    
    const emailsArray = Array.from(tableContentElements);
    const targetElement = emailsArray.find(el => el.textContent == emailInputElement.value);

    if (targetElement) {
        targetElement.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    emailInputElement.value = '';
}