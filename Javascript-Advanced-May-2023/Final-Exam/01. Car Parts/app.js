window.addEventListener('load', solve);

function solve() {
        const allInputElementsArray = Array.from(document.querySelectorAll('form > input'));
        const conditionElement = document.querySelector('select#condition');
        allInputElementsArray.push(conditionElement);
        const allInputElementsArrayLength = allInputElementsArray.length;
        const nextButton = document.querySelector('button#next-btn');
        let allInputsValueArray = [];
        // console.log(allInputElementsArrayLength);
        const ulPartInfoElement = document.querySelector('ul.info-list');
        // console.log(ulPartInfoElement);
        const ulConfirmOrderElement = document.querySelector('ul.confirm-list');
        // console.log(ulConfirmOrderElement);
        const imgCompleteElement = document.querySelector('img#complete-img');
        const paragraphCompleteElement = document.querySelector('p#complete-text');
        // console.log(imgCompleteElement);
        // console.log(paragraphCompleteElement);

        const pElementCreator = () => { return document.createElement('p') };
        const buttonElementCreator = (className, textContent) => {
                const button = document.createElement('button');
                button.className = className;
                button.textContent = textContent;
                return button;
        };

        const editButtonEventHandler = (e) => {
                // console.log(e.currentTarget);
                for (let i = 0; i < allInputElementsArrayLength; i++) {
                        allInputElementsArray[i].value = allInputsValueArray[i];
                }
                e.currentTarget.parentElement.remove();
                nextButton.disabled = false;
        };
        const confirmButtonEventHamdler = (e) => {
                const liEl = e.currentTarget.parentElement;
                liEl.remove();
                nextButton.disabled = false;
                imgCompleteElement.style.visibility = 'visible';
                paragraphCompleteElement.textContent = 'Part is Ordered!';
        };
        const cancelButtonEventHamdler = (e) => {
                const liEl = e.currentTarget.parentElement;
                liEl.remove();
                nextButton.disabled = false;
        };
        const continueButtonEventHandler = (e) => {
                const liEl = e.currentTarget.parentElement;
                // console.log(liEl);
                const editButtonEl = e.currentTarget.previousSibling;
                const continueButtonEl = e.currentTarget;
                editButtonEl.remove();
                continueButtonEl.remove();
                const confirmButton = buttonElementCreator('confirm-btn', 'Confirm');
                confirmButton.addEventListener('click', confirmButtonEventHamdler);
                liEl.appendChild(confirmButton);
                const cancelButton = buttonElementCreator('cancel-btn', 'Cancel');
                cancelButton.addEventListener('click', cancelButtonEventHamdler);
                liEl.appendChild(cancelButton);
                ulConfirmOrderElement.appendChild(liEl);
        };

        const nextButtonEventHandler = (e) => {
                e.preventDefault();
                for (const inputEl of allInputElementsArray) {
                        if (!inputEl.value) {
                                return;
                        }
                }
                const carYear = Number(allInputElementsArray[1].value);
                if (carYear < 1980 || carYear > 2023) {
                        return;
                }
                const inputValuesArray = [];
                allInputElementsArray.map((el) => inputValuesArray.push(el.value));

                const liEl = document.createElement('li');
                liEl.className = 'part-content';
                const articleEl = document.createElement('article');
                const pModelEl = pElementCreator();
                pModelEl.textContent = `Car Model: ${allInputElementsArray[0].value}`;
                const pYearEl = pElementCreator();
                pYearEl.textContent = `Car Year: ${allInputElementsArray[1].value}`;
                const pPartNameEl = pElementCreator();
                pPartNameEl.textContent = `Part Name: ${allInputElementsArray[2].value}`;
                const pPartNumberEl = pElementCreator();
                pPartNumberEl.textContent = `Part Number: ${allInputElementsArray[3].value}`;
                const pCondEl = pElementCreator();
                pCondEl.textContent = `Condition: ${allInputElementsArray[4].value}`;
                articleEl.appendChild(pModelEl);
                articleEl.appendChild(pYearEl);
                articleEl.appendChild(pPartNameEl);
                articleEl.appendChild(pPartNumberEl);
                articleEl.appendChild(pCondEl);
                liEl.appendChild(articleEl);
                const editButton = buttonElementCreator('edit-btn', 'Edit');
                editButton.addEventListener('click', editButtonEventHandler);
                liEl.appendChild(editButton);
                const continueButton = buttonElementCreator('continue-btn', 'Continue');
                continueButton.addEventListener('click', continueButtonEventHandler);
                liEl.appendChild(continueButton);
                ulPartInfoElement.appendChild(liEl);

                allInputsValueArray = JSON.parse(JSON.stringify(inputValuesArray));
                allInputElementsArray.forEach(el => el.value = '');
                nextButton.disabled = true;

                imgCompleteElement.style.visibility = 'hidden';
                paragraphCompleteElement.textContent = '';
        };
        nextButton.addEventListener('click', nextButtonEventHandler);
};




