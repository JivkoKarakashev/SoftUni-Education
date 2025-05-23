import { html, render } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { get, post, put, del } from './src/api.js';

const url = '/jsonstore/advanced/table';
const tbodyEl = document.querySelector('tbody');
// const searchButton = document.querySelector('#searchBtn');
const inoutFieldEl = document.querySelector('#searchField');
// console.log(inoutFieldEl);

const getData = async () => {
   const dataArr = Object.entries(await get(url));
   // console.log(dataArr);
   const template = (arr) => html`
         ${arr.map((std) => {
            const fullName = `${std[1]['firstName']} ${std[1]['lastName']}`;
            return html`
            <tr>
               <td>${fullName}</td>
               <td>${std[1]['email']}</td>
               <td>${std[1]['course']}</td>
            </tr>
         `})}         
`;
   render(template(dataArr), tbodyEl);
};


function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   getData();

   function onClick(e) {
      // console.log(e.currentTarget);
      const allTableRowsArr = Array.from(tbodyEl.querySelectorAll('tr'));
      allTableRowsArr.forEach(row => row.classList.remove('select'));
      const allTableCellsArr = Array.from(tbodyEl.querySelectorAll('tr > td'));
      const inputValue = inoutFieldEl.value.toLowerCase();
      if (inputValue == '') {
         return;
      }
      // console.log(allTableCellsArr);
      allTableCellsArr.forEach(cellData => {
         if (cellData.textContent.toLowerCase().includes(inputValue)) {
            cellData.parentElement.classList.add('select');
         }
      });
      inoutFieldEl.value = '';
   }
}

solve()