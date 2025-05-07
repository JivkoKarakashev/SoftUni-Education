import { createProduct, getOrdersByUserId, placeOrder } from "./api.js";
import { getUserData } from "./getUserData.js";

const homeViewMainEl = document.querySelector('.col-md-12');
const formRowsData = [
    {
        labelText: 'Name',
        inputAttributes: {
            type: 'text',
            name: 'name'
        }

    },
    {
        labelText: 'Price',
        inputAttributes: {
            type: 'text',
            name: 'price'
        }

    },
    {
        labelText: 'Factor',
        inputAttributes: {
            type: 'text',
            name: 'factor'
        }

    },
    {
        labelText: 'Img',
        inputAttributes: {
            type: 'text',
            name: 'img'
        }

    },
];
let furnitureDataState = [];
const baseUrl = 'http://localhost:3030/data';

function updateHomeView(furnitureData, hasUser, ordersData) {
    // const userData = getUserData();
    const componentsArr = [];
    furnitureDataState = [...furnitureData];
    const table = createTable(furnitureData, hasUser);
    // componentsArr.push(table);
    // console.log(table);
    if (hasUser) {
        const h2El = document.createElement('h2');
        h2El.textContent = 'Create Product';
        const publishingFormEl = createPublishingForm();
        const hr1El = document.createElement('hr');
        const buyBtn = createBuyButton();
        buyBtn.addEventListener('click', onBuy);
        const allOrdersBtn = createAllOrdersButton();
        if (ordersData) {
            const hr2El = document.createElement('hr');
            const ordersEl = fillOrders(ordersData);
            componentsArr.push(h2El, publishingFormEl, hr1El, table, buyBtn, hr2El, ordersEl, allOrdersBtn);
        } else {
            componentsArr.push(h2El, publishingFormEl, hr1El, table, buyBtn, allOrdersBtn);
        }
    } else {
        componentsArr.push(table);
    }
    homeViewMainEl.replaceChildren(...componentsArr);
}

function createPublishingForm() {
    const formEl = document.createElement('form');
    formEl.setAttribute('action', '');
    formEl.setAttribute('method', 'post');

    formRowsData.forEach(row => {
        const { labelText, inputAttributes } = row;
        const { name, type } = inputAttributes;
        const labelEl = document.createElement('label');
        labelEl.textContent = labelText;
        const inputEl = document.createElement('input');
        inputEl.setAttribute('type', type);
        inputEl.setAttribute('name', name);
        labelEl.append(inputEl);
        formEl.appendChild(labelEl);
    });
    const createBtnEl = document.createElement('button');
    createBtnEl.textContent = 'Create';
    formEl.appendChild(createBtnEl);
    formEl.addEventListener('submit', onCreateProduct);
    return formEl;
}

function createTable(furnitureData, hasUser) {
    const tableEl = document.createElement('table');
    tableEl.classList.add('table');
    const tHeadEl = document.createElement('thead');
    const trEl = document.createElement('tr');
    const thImage = document.createElement('th');
    thImage.textContent = 'Image';
    const thName = document.createElement('th');
    thName.textContent = 'Name';
    const thPrice = document.createElement('th');
    thPrice.textContent = 'Price';
    const thFactor = document.createElement('th');
    thFactor.textContent = 'Decoration factor';
    const thMark = document.createElement('th');
    thMark.textContent = 'Mark';
    trEl.append(thImage, thName, thPrice, thFactor, thMark);
    tHeadEl.appendChild(trEl);
    const tbodyEl = document.createElement('tbody');
    const tableContent = fillTable(furnitureData, hasUser);
    tbodyEl.append(...tableContent);
    tableEl.append(tHeadEl, tbodyEl);
    // console.log(tableContent);
    return tableEl;
}

function fillTable(furnitureData, hasUser) {
    const tableContent = [];
    console.log(furnitureData);
    // console.log(userData);
    furnitureData.forEach(furniture => {
        const trEl = document.createElement('tr');
        for (let i = 0; i < 5; i++) {
            const tdEl = document.createElement('td');
            const { _ownerId, name, price, factor, img, _id } = furniture;
            switch (i) {
                case 0: {
                    const imgEl = document.createElement('img');
                    imgEl.setAttribute('src', img);
                    tdEl.appendChild(imgEl);
                    trEl.appendChild(tdEl);
                    break;
                };
                case 1: {
                    const pEl = document.createElement('p');
                    pEl.textContent = name;
                    tdEl.appendChild(pEl);
                    trEl.appendChild(tdEl);
                    break;
                }
                case 2: {
                    const pEl = document.createElement('p');
                    pEl.textContent = price;
                    tdEl.appendChild(pEl);
                    trEl.appendChild(tdEl);
                    break;
                }
                case 3: {
                    const pEl = document.createElement('p');
                    pEl.textContent = factor;
                    tdEl.appendChild(pEl);
                    trEl.appendChild(tdEl);
                    break;
                }
                case 4: {
                    const inputEl = document.createElement('input');
                    inputEl.setAttribute('type', 'checkbox');
                    // console.log(hasUser);
                    inputEl.disabled = hasUser === false ? true : false;
                    tdEl.appendChild(inputEl);
                    trEl.appendChild(tdEl);
                    break;
                }
            }
            tableContent.push(trEl);
        }
    });
    return tableContent;
}

function createBuyButton() {
    const buyBtnEl = document.createElement('button');
    buyBtnEl.textContent = 'Buy';
    return buyBtnEl;
}

function createAllOrdersButton() {
    const allOrdersBtnEl = document.createElement('button');
    allOrdersBtnEl.textContent = 'All orders';
    allOrdersBtnEl.addEventListener('click', onGetAllOrders);
    return allOrdersBtnEl;
}

function fillOrders(ordersData) {
    const boughtFurnitureNamesArr = [];
    const boughtFurniturePricesArr = [];
    const divEl = document.createElement('div');
    divEl.classList.add('orders');
    ordersData.forEach(order => {
        const { name, price } = order;
        boughtFurnitureNamesArr.push(name);
        boughtFurniturePricesArr.push(price);
    });
    const boughtFurnitureNamesStr = `Bought furniture: ${boughtFurnitureNamesArr.join(', ')}`;
    const boughtFurnitureTotalPriceStr = `Total price: ${boughtFurniturePricesArr.reduce((acc, curr) => acc += curr, 0)} $`;
    const pNamesEl = document.createElement('p');
    pNamesEl.textContent = boughtFurnitureNamesStr;
    const pTotalEl = document.createElement('p');
    pTotalEl.textContent = boughtFurnitureTotalPriceStr;
    divEl.append(pNamesEl, pTotalEl);
    return divEl;
}

async function onGetAllOrders() {
    const { _id } = getUserData();
    getOrdersByUserId(_id)
        .then(data => {
            fillOrders(data);
            updateHomeView(furnitureDataState, true, data);
        })
        .catch(err => {
            alert(err.meeage);
        });
}

function onBuy(event) {
    event.preventDefault();
    const tableRows = Array.from(document.querySelectorAll('.table > tbody > tr'));
    // console.log(tableRows);
    tableRows.forEach((row, i) => {
        const checkbox = row.querySelector('input');
        // console.log(checkbox.checked);
        if (checkbox.checked) {
            placeOrder(furnitureDataState[i])
                .then(order => {
                    // console.log(order);
                })
                .catch(err => {
                    alert(err.meeage);
                });
        }
    });
}

// async function placeOrder(furnitureData) {
//     const { accessToken } = getUserData();

//     const options = {
//         method: 'POST',
//         headers: {
//             'X-Authorization': accessToken,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(furnitureData),
//     }

//     const response = await fetch(`${baseUrl}/orders`, options);
//     if (response.ok === false) {
//         const error = await response.json();
//         throw error;
//     }
//     return await response.json();
// }

function onCreateProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let { name, price, factor, img } = Object.fromEntries(formData.entries());
    price = Number(price);
    factor = Number(factor);
    // console.log(name, price, factor, img);
    if (!name || !price || !factor || !img) {
        const error = new Error('All fields are required!');
        throw error;
    }
    createProduct(name, price, factor, img)
        .then(newProduct => {
            const tbodyEl = document.querySelector('.table > tbody');
            // console.log(tbodyEl);
            furnitureDataState = [...furnitureDataState, { ...newProduct }];
            const tableContent = fillTable([{ ...newProduct }], true);
            tbodyEl.append(...tableContent);
        })
        .catch(err => {
            alert(err.message);
        });
}

// async function createProduct(e) {
//     const { accessToken } = getUserData();
//     const formData = new FormData(e.target);
//     let { name, price, factor, img } = Object.fromEntries(formData.entries());
//     price = Number(price);
//     factor = Number(factor);
//     // console.log({ name, price, factor, img });
//     if (!name || !price || !factor || !img) {
//         const error = new Error('All fields are required!');
//         throw error;
//     }

//     const options = {
//         method: 'POST',
//         headers: {
//             'X-Authorization': accessToken,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, price, factor, img }),
//     }

//     const response = await fetch(`${baseUrl}/furniture`, options);
//     if (response.ok === false) {
//         const error = await response.json();
//         throw error;
//     }
//     return await response.json();
// }

export {
    updateHomeView
}