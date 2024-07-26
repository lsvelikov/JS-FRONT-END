function search() {

   let towns = document.querySelectorAll('li');
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;

   for (const town of towns) {
      town.style.fontWeight = '';
      town.style.textDecoration = '';
   }

   for(const town of towns) {
      if(town.textContent.includes(searchText)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }

   result.textContent = `${matches} matches found`;
   
}
