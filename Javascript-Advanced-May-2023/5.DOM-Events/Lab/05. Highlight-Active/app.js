function focused() {
    
    const divSectionsElements = document.querySelectorAll('body div div input');
    const sectionsArray = Array.from(divSectionsElements);  
    // console.log(divSectionsElements);

    const focusEventListner = (e) => {
        // console.log(e.currentTarget); 
        e.currentTarget.parentElement.classList.add('focused');
    };
    const blurEventListner = (e) => {
        e.currentTarget.parentElement.classList.remove('focused');
    }

    for (let inputEl of sectionsArray) {
        // console.log(sectionEl);
        inputEl.addEventListener('focus', focusEventListner);
        inputEl.addEventListener('blur', blurEventListner);
    }
}