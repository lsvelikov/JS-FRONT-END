function create(words) {
   const contentElement = document.getElementById('content');

   words.forEach(word => {
      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      const divElement = document.createElement('div');
      divElement.appendChild(paragraphElement);

      contentElement.appendChild(divElement);

      divElement.addEventListener('click', (e) => {
         paragraphElement.style.display = '';
      });
   });
}