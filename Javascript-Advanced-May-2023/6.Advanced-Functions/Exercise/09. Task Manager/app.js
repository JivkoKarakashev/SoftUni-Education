function solve() {

    const inputTaskElement = document.querySelector('input#task');
    const descriptionElement = document.querySelector('textarea#description');
    const inputDateElement = document.querySelector('input#date');
    const addButtonElement = document.querySelector('button#add');

    const openSectionDivElement = document.querySelector('section:nth-child(2) div:nth-child(2)');

    const inProgressSectionDivElement = document.querySelector('section:nth-child(3) div#in-progress');

    const completeSectionDivElement = document.querySelector('section:nth-child(4) div:nth-child(2)');

    const inputValidate = () => {
        let isValid = true;
        if (!inputTaskElement.value || !descriptionElement.value || !inputDateElement.value) {
            isValid = false;
        }
        return isValid;
    };
    const startButtonEventHandler = (e) => {
        const articleElement = e.currentTarget.parentElement.parentElement;
        // console.log(e.currentTarget);
        if (e.currentTarget.textContent == 'Start' && e.currentTarget.parentElement.children[1].textContent == 'Delete') {            
            inProgressSectionDivElement.appendChild(articleElement);
            e.currentTarget.textContent = 'Delete';
            e.currentTarget.className = 'red';
            e.currentTarget.parentElement.children[1].textContent = 'Finish';
            e.currentTarget.parentElement.children[1].className = 'orange';
        } else if (e.currentTarget.textContent == 'Delete' && e.currentTarget.parentElement.children[1].textContent == 'Finish') {
            // console.log(completeSectionDivElement);
            articleElement.remove();
        }
    };
    const deleteButtonEventHandler = (e) => {
        const articleElement = e.currentTarget.parentElement.parentElement;
        if (e.currentTarget.textContent == 'Delete' && e.currentTarget.parentElement.children[0].textContent == 'Start') {
            articleElement.remove();            
        } else if (e.currentTarget.textContent == 'Finish' && e.currentTarget.parentElement.children[0].textContent == 'Delete'){
            completeSectionDivElement.appendChild(articleElement);
            e.currentTarget.parentElement.remove();
        }
        // console.log(articleElement);
    };
    const articleGenerator = () => {
        const articleElement = document.createElement('article');
        const headerElement = document.createElement('h3');
        headerElement.textContent = inputTaskElement.value;
        const paraDescElement = document.createElement('p');
        paraDescElement.textContent = `Description: ${descriptionElement.value}`;
        const paraDateElement = document.createElement('p');
        paraDateElement.textContent = `Due Date: ${inputDateElement.value}`;
        const divElement = document.createElement('div');
        divElement.className = 'flex';
        const startButtonElement = document.createElement('button');
        startButtonElement.textContent = 'Start';
        startButtonElement.className = 'green';
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.className = 'red';
        divElement.appendChild(startButtonElement);
        divElement.appendChild(deleteButtonElement);
        articleElement.appendChild(headerElement);
        articleElement.appendChild(paraDescElement);
        articleElement.appendChild(paraDateElement);
        articleElement.appendChild(divElement);
        openSectionDivElement.appendChild(articleElement);
        startButtonElement.addEventListener('click', startButtonEventHandler);
        deleteButtonElement.addEventListener('click', deleteButtonEventHandler);
    };

    const addButtonEventHandler = (e) => {
        e.preventDefault();
        if (inputValidate()) {
            articleGenerator();
        }
    };

    addButtonElement.addEventListener('click', addButtonEventHandler);
    
    // console.log(articleGenerator());
    
}