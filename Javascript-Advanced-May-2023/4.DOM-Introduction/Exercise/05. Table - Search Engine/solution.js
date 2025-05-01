function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      let tableNodes = document.querySelectorAll('tbody > tr');
      let searchField = document.querySelector('tfoot tr input#searchField');
      let tableNodesArr = Array.from(tableNodes);
      let regEx = new RegExp(searchField.value, 'gim');
      tableNodesArr.map(el => {
         el.classList.remove('select');
         if (el.textContent.match(regEx)) {
            el.className = 'select';
         }
      });
   }
}
