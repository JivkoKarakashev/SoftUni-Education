function validate() {
    
    const emailInputElement = document.querySelector('body input#email');
    const emailRegEx = /^[a-z]+\@[a-z]+.[a-z]+$/;
    
    const keyboardEventHandler = (e) => {
        let inputField = e.currentTarget;
        if (emailRegEx.test(inputField.value)){
            e.currentTarget.classList.remove('error');
        } else {
            e.currentTarget.classList.add("error");
        }
    };
    emailInputElement.addEventListener('change', keyboardEventHandler);
}