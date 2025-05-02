window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model');
    const yearFiled = document.getElementById('year');
    const descriptionField = document.getElementById('description');
    const priceField = document.getElementById('price');
    const addButton = document.getElementById('add');
    const tBody = document.getElementById('furniture-list');
    let totalPrice = 0;
    const totalPriceField = document.querySelector('.total-price')
 
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        const model = modelField.value;
        const year = Number(yearFiled.value);
        const description = descriptionField.value;
        const price = Number(priceField.value);
        if (model === '' || description === '' || year <= 0 || price <= 0) {
            return;
        }
        const tr1ELement = document.createElement('tr');
        tr1ELement.setAttribute('class', 'info');
        const tdName = document.createElement('td');
        tdName.textContent = model;
        tr1ELement.appendChild(tdName);
 
        const tdPrice = document.createElement('td');
        tdPrice.textContent = price.toFixed(2);
        tr1ELement.appendChild(tdPrice);
 
        const tdButtons = document.createElement('td');
        const moreInfoBtn = document.createElement('button');
        moreInfoBtn.textContent = 'More Info';
        moreInfoBtn.setAttribute('class', 'moreBtn');
        moreInfoBtn.addEventListener('click', () => {
            if(moreInfoBtn.textContent === 'More Info') {
                moreInfoBtn.textContent = 'Less Info';
                tr2Element.style.display = 'contents';
            } else {
                moreInfoBtn.textContent = 'More Info';
                tr2Element.style.display = 'none';
            }
        })
        tdButtons.appendChild(moreInfoBtn);
 
        const moreBuyIt = document.createElement('button');
        moreBuyIt.textContent = 'Buy it';
        moreBuyIt.setAttribute('class', 'buyBtn');
        moreBuyIt.addEventListener('click', () => {
            tBody.removeChild(tr1ELement);
            tBody.removeChild(tr2Element);
            totalPrice += price;
            totalPriceField.textContent = totalPrice.toFixed(2);
        })
        tdButtons.appendChild(moreBuyIt);
 
        tr1ELement.appendChild(tdButtons);
 
        const tr2Element = document.createElement('tr');
        tr2Element.setAttribute('class', 'hide');
        const tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year}`;
        tr2Element.appendChild(tdYear);
 
        const tdDescription = document.createElement('td');
        tdDescription.setAttribute('colspan', '3');
        tdDescription.textContent = `Description: ${description}`;
        tr2Element.appendChild(tdDescription);
 
        tBody.appendChild(tr1ELement);
        tBody.appendChild(tr2Element);
 
 
        document.getElementById('model').value = '';
        document.getElementById('year').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';
 
    })
}