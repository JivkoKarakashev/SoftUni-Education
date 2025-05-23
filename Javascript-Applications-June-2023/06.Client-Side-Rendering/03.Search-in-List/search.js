// window.onload = search();
// window.addEventListener('load', search());
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { towns } from './towns.js';

const divTownsEl = document.querySelector('#towns');
const searchInputEl = document.querySelector('#searchText');
const button = document.querySelector('button');
const divMatchesEl = document.querySelector('#result');

const template = (arr) => html`
      <ul>
         ${arr.map((town) => html`<li>${town}</li>`)}
      </ul>
      `;
const renderFunc = (arr, rootEl) => render(template(arr), rootEl);

const foundFunc = () => {
   let matches = 0;
   const inputValue = searchInputEl.value;
   if (inputValue == '') {
      return;
   }
   const allliTownsElsArr = Array.from(divTownsEl.querySelectorAll('ul > li'));
   allliTownsElsArr.forEach(element => {
      if(element.textContent.includes(inputValue)){
         element.className = 'active';
         matches++;
      } else {
         element.className = '';
      }
   });
   divMatchesEl.textContent = `${matches} matches found`;
};

function search() {
   renderFunc(towns, divTownsEl);
}
search();

button.onclick = foundFunc;