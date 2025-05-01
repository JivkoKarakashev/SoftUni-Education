function solve() {
   
   const addButtonsElements = Array.from(document.querySelectorAll('button.add-product'));
   const checkoutButtonElement = document.querySelector('button.checkout');
   const textAreaElement = document.querySelector('textarea');
   // console.log(textAreaElement);
   let totalPrice = 0;
   const productsListArr = [];
   
   const addButtonEventHandler = (e) => {
      const product = e.currentTarget.parentElement.parentElement.children[1].textContent.split('\n').find(el => el.length > 0).trim();
      const price = Number(e.currentTarget.parentElement.parentElement.children[3].textContent);
      textAreaElement.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
      totalPrice += price;
      productsListArr.push(product);
   }
   const checkoutButtonEventHandler = (e) => {
      const finalProductsListArr = [...new Set(productsListArr)];
      textAreaElement.value += `You bought ${finalProductsListArr.join(', ')} for ${totalPrice.toFixed(2)}.`
      addButtonsElements.map((butt) => butt.disabled = true);
      e.currentTarget.disabled = true;
   }

   for (const button of addButtonsElements) {
      button.addEventListener('click', addButtonEventHandler);
   }   
   // console.log(checkoutButtonElement);
   checkoutButtonElement.addEventListener('click', checkoutButtonEventHandler);
}