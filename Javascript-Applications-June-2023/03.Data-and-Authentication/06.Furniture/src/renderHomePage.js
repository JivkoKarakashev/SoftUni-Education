import { getFurnitureData } from "./api.js";
import { publishingFormConfig, rootEl } from "./constants.js";
import { createButton, createFormElement, createH2Element, createHrElement, createTable } from "./domElementsFactory.js";
import { onBuy, showAllOrders } from "./eventHandlers.js";
import { hasUser } from "./getUserData.js";
import { setFurnitureDataState } from "./states.js";
import { switchActiveButtons } from "./updateNav.js";

function renderHomePage(event) {
    // console.log('Has Event: ' + !!event);
    if (event) {
        event.preventDefault();
    }

    getFurnitureData()
        .then(data => {
            // console.log(data);
            setFurnitureDataState(data);
            // furnitureData = [...data];
            (hasUser() === false)
                ? renderGuestHomePage()
                : renderUserHomePage();
        })
        .catch(err => {
            alert(err.message);
        });

}

const renderGuestHomePage = () => {
    switchActiveButtons('catalog');
    const table = createTable();
    rootEl.replaceChildren(table);
}

const renderUserHomePage = () => {
    switchActiveButtons('catalog');
    const h2el = createH2Element('Create Product');
    const publishingFormEl = createFormElement(publishingFormConfig);
    const hr1El = createHrElement();
    const table = createTable();
    const buyBtnEl = createButton('Buy', onBuy);
    const hr2El = createHrElement();
    rootEl.replaceChildren(h2el, publishingFormEl, hr1El, table, buyBtnEl, hr2El);
    showAllOrders(null);
}

export {
    renderHomePage
}