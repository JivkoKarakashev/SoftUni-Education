function search() {
   
   let townsArr = Array.from(document.querySelectorAll('ul#towns>li'));
   let searchTxt = document.querySelector('input#searchText').value;
   let resultDiv = document.querySelector('div#result');

   let matches = 0;
   townsArr.map(town => {
      town.style.fontWeight = '';
      town.style.textDecoration = '';
      if (searchTxt && town.textContent.includes(searchTxt)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   });
   resultDiv.textContent = `${matches} matches found`;
}

// console.log(Boolean(''));
// console.log(Boolean('a'));
// search()
