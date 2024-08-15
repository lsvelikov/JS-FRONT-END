function solve() {
   const addProductButtonsElement = document.querySelectorAll('button.add-product');
   const textareaElement = document.querySelector('textarea');
   const checkoutElement = document.querySelector('.checkout');

   let totalPrice = 0;
   let productsList = {};
   for (const buttonElement of addProductButtonsElement) {
      const productElement = buttonElement.parentElement.parentElement;
      console.log(productElement);

      buttonElement.addEventListener('click', (e) => {
         const productName = productElement.querySelector('.product-title').textContent;
         const productPrice = Number(productElement.querySelector('.product-line-price').textContent);

         totalPrice += productPrice;
         productsList[productName] = true;

         textareaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

      });
   }

   checkoutElement.addEventListener('click', (e) => {
      Array.from(addProductButtonsElement).forEach(btnElement => btnElement.setAttribute('disabled', 'disabled'));
      e.target.setAttribute('disabled', 'disabled');
      textareaElement.textContent += `You bought ${Object.keys(productsList).join(', ')} for ${totalPrice.toFixed(2)}.`;
   });
}