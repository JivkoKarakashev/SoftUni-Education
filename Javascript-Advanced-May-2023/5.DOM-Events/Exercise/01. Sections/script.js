function create(words) {
   const resultDivElement = document.querySelector('body div#content');

   const divElementHandler = (e) => {
      e.currentTarget.children[0].style.display ="";
   }

   for (const paragText of words) {
      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      const pElTextNode = document.createTextNode(paragText);
      pEl.style.display = 'none';
      pEl.appendChild(pElTextNode);
      divEl.appendChild(pEl);
      resultDivElement.appendChild(divEl);
      divEl.addEventListener('click', divElementHandler);
   }
}