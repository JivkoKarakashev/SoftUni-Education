function validate() {
    const inputFieldElement = document.querySelector('body input#email');
    // console.log(inputFieldElement);
    
    const validMailRegEx = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const validateField = () => {
        if (!validMailRegEx.test(inputFieldElement.value)) {;
            inputFieldElement.classList.add('error');
        } else {
            inputFieldElement.classList.remove('error');
        }
    };
    
    const changeEventListner = (e) => {
        validateField();
    }

    inputFieldElement.addEventListener('change',changeEventListner);
}