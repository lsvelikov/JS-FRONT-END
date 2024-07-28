function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let elements = document.querySelectorAll('tbody tr');
      let searchText = document.getElementById('searchField').value;

      for (const el of elements) {
         el.classList.remove('select');
      }

      for (const el of elements) {
         if(el.textContent.includes(searchText)) {
            el.classList = 'select';
         }
         console.log(el.textContent);
      }
   }
}