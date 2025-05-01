function solve() {

  const generateButtonElement = document.querySelector('div#exercise > button:nth-child(3)');
  const buyButtonElement = document.querySelector('div#exercise > button:nth-child(6)');
  const tableElement = document.querySelector('table[class=\'table\'] tbody');
  const furnitureBuyListResultElement = document.querySelector('div#exercise > textarea:nth-child(5)');
  // console.log(furnitureListInputElement);

  const tdElCreator = () => document.createElement('td');
  const pElCreator = (txt) => {
    const newP = document.createElement('p');
    newP.textContent = txt;
    return newP;
  };

  const generateButtonEventHandler = () => {
    const furnitureListInputElement = JSON.parse(document.querySelector('div#exercise > textarea:nth-child(2)').value);
    for (const currFurnObj of furnitureListInputElement) {
      let { name, img, price, decFactor } = currFurnObj;
      // console.log(name, img, price, decFactor);
      const newRow = document.createElement('tr');
      const imgEl = document.createElement('img');
      const imgTd = tdElCreator();
      imgEl.src = img;
      imgTd.appendChild(imgEl);
      newRow.appendChild(imgTd);
      const nameTd = tdElCreator();
      const nameP = pElCreator(name);
      nameTd.appendChild(nameP);
      newRow.appendChild(nameTd);
      const priceTd = tdElCreator();
      const priceP = pElCreator(price);
      priceTd.appendChild(priceP);
      newRow.appendChild(priceTd);
      const decFactorTd = tdElCreator();
      const decFactorP = pElCreator(decFactor);
      decFactorTd.appendChild(decFactorP);
      newRow.appendChild(decFactorTd);
      const checkboxTd = tdElCreator();
      const checkboxInput = document.createElement('input');
      checkboxInput.type = 'checkbox';
      checkboxInput.disabled = false;
      checkboxTd.appendChild(checkboxInput);
      newRow.appendChild(checkboxTd);
      tableElement.appendChild(newRow);
    }
  };
  const buyButtonEventHandler = () => {
    let totalPrice = 0;
    const furnitureBuyListArr = [];
    const decFactorArr = [];
    const tableArr = Array.from(document.querySelectorAll('table[class=\'table\'] tbody')[0].children);
    for (const furn of tableArr) {
      const isChecked = furn.children[furn.children.length - 1].children[0].checked;
      console.log(furn);
      if (isChecked) {
        const furnName = furn.children[1].children[0].textContent;
        const furnPrice = Number(furn.children[2].children[0].textContent);
        const furndecFactor = Number(furn.children[3].children[0].textContent);
        totalPrice += furnPrice;
        furnitureBuyListArr.push(furnName);
        decFactorArr.push(furndecFactor);
      }
    }
    const printFirstLine = `Bought furniture: ${furnitureBuyListArr.join(', ')}`;
    const printSecondLine = `Total price: ${totalPrice.toFixed(2)}`;
    const sumDecfactors = decFactorArr.reduce((acc, decF) => acc += decF, 0);
    const printThirdLine = `Average decoration factor: ${sumDecfactors / decFactorArr.length}`;
    furnitureBuyListResultElement.textContent = `${printFirstLine}\n${printSecondLine}\n${printThirdLine}`;
  };

  generateButtonElement.addEventListener('click', generateButtonEventHandler);
  buyButtonElement.addEventListener('click', buyButtonEventHandler);
}