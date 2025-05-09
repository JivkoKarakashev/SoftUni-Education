import { createProduct, getOrdersByUserId, placeOrder } from "./api.js";
import { rootEl } from "./constants.js";
import { createButton, createParagraphElements, createTableRow } from "./domElementsFactory.js";
import { getUserData } from "./getUserData.js";
import { getFurnitureDataStateByIndex, setFurnitureDataState } from "./states.js";

async function onCreateProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let { name, price, factor, img } = Object.fromEntries(formData.entries());
    price = Number(price);
    factor = Number(factor);
    // console.log(name, price, factor, img);
    try {
        if (!name || !price || !factor || !img) {
            const error = new Error('All fields are required!');
            throw error;
        }
    } catch (err) {
        return alert(err.message);
    }

    createProduct(name, price, factor, img)
        .then(item => {
            setFurnitureDataState(item);
            const tbodyEl = rootEl.querySelector('.table > tbody');
            // console.log(tbodyEl);
            const tableRow = createTableRow(item);
            tbodyEl.appendChild(tableRow);
        })
        .catch(err => {
            alert(err.message);
        });
}

async function onBuy(event) {
    event.preventDefault();
    const tableRows = Array.from(document.querySelectorAll('.table > tbody > tr'));
    // console.log(tableRows);
    tableRows.forEach((row, i) => {
        const checkbox = row.querySelector('input');
        // console.log(checkbox.checked);
        if (checkbox.checked) {
            const furnitureData = getFurnitureDataStateByIndex(i);
            placeOrder(furnitureData)
                // placeOrder(furnitureData[i])
                .then(order => {
                    // console.log(order);
                })
                .catch(err => {
                    alert(err.meeage);
                });
        }
    });
}

async function onGetAllOrders() {
    const { _id } = getUserData();
    getOrdersByUserId(_id)
        .then(data => {
            // console.log(data);
            showAllOrders(data);
        })
        .catch(err => {
            alert(err.meeage);
        });
}

const showAllOrders = (orderData) => {
    const allOrdersBtnEl = createButton('All orders', onGetAllOrders);
    if (!orderData) {
        const divEl = document.createElement('div');
        divEl.classList.add('orders');
        divEl.appendChild(allOrdersBtnEl);
        rootEl.appendChild(divEl);
        return;
    }

    const ordersEl = rootEl.querySelector('.orders');
    const boughtFurnitureNamesArr = [];
    const boughtFurniturePricesArr = [];
    orderData.forEach(order => {
        const { name, price } = order;
        boughtFurnitureNamesArr.push(name);
        boughtFurniturePricesArr.push(price);
    });
    const boughtFurnitureNamesStr = `Bought furniture: ${boughtFurnitureNamesArr.join(', ')}`;
    const boughtFurnitureTotalPriceStr = `Total price: ${boughtFurniturePricesArr.reduce((acc, curr) => acc += curr, 0)} $`;
    const pNamesEl = createParagraphElements(boughtFurnitureNamesStr);
    const pTotalEl = createParagraphElements(boughtFurnitureTotalPriceStr);
    ordersEl.replaceChildren(pNamesEl, pTotalEl, allOrdersBtnEl);
};

export {
    onCreateProduct,
    onBuy,
    onGetAllOrders,
    showAllOrders
}