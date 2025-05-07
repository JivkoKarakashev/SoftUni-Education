// window.onload = solution();
window.addEventListener('load', solution());

function solution() {
    const urlTitles = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const urlContents = 'http://localhost:3030/jsonstore/advanced/articles/details';
    const mainElement = document.querySelector('#main');
    // console.log(mainElement);

    const createElement = (tag, content, attributesArr = []) => {
        const element = document.createElement(tag);
        if (content) {
            element.textContent = content;
        }
        if (attributesArr.length !== 0) {
            for (let i = 0; i < attributesArr.length; i += 2) {
                element.setAttribute(attributesArr[i], attributesArr[i + 1]);
            }
        }
        return element;
    };
    const buttonEventHandler = (e) => {
        // console.log(e.currentTarget.id);
        const currentTargetId = e.currentTarget.id;
        const pEl = e.currentTarget.parentElement.nextSibling.firstChild;
        const divExtraEl = e.currentTarget.parentElement.nextSibling;
        const button = e.currentTarget;
        // console.log(buttonText);

        const response = fetch(`${urlContents}/${currentTargetId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        response
            .then((resp) => resp.json())
            .then(contentObj => {
                // console.log(contentObj);
                const { content } = contentObj;
                pEl.textContent = content;

            });
        if (button.textContent === 'More') {
            divExtraEl.style.display = 'block';
            button.textContent = 'Less';
        } else {
            divExtraEl.style.display = 'none';
            button.textContent = 'More';
        }
    };

    const response = fetch(urlTitles, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    response
        .then((resp) => resp.json())
        .then(titlesObjsArray => {
            // console.log(titlesObjsArray);
            titlesObjsArray.forEach(titleObj => {
                const { title, _id } = titleObj;
                const divAccordionEl = createElement('div', '', ['class', 'accordion']);
                const divHeadEl = createElement('div', '', ['class', 'head']);
                const spanEl = createElement('span', title, []);
                divHeadEl.appendChild(spanEl);
                const button = createElement('button', 'More', ['class', 'button', 'id', _id]);
                button.addEventListener('click', buttonEventHandler);
                divHeadEl.appendChild(button);
                divAccordionEl.appendChild(divHeadEl);

                const divExtraEl = createElement('div', '', ['class', 'extra']);
                const pEl = createElement('p', '', []);
                divExtraEl.appendChild(pEl);
                divAccordionEl.appendChild(divExtraEl);

                mainElement.appendChild(divAccordionEl);
            });
        });
}