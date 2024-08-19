function addItem() {
    let newItemTextElement = document.querySelector('#newItemText');
    let newItemValueElement = document.querySelector('#newItemValue');
    let selectMenu = document.querySelector('#menu');

    let newOption = document.createElement('option');
    newOption.textContent = newItemTextElement.value;
    newOption.value = newItemValueElement.value;

    if(newItemTextElement.value !== '' && newItemValueElement.value !== '') {
        selectMenu.appendChild(newOption);
    }
   
    newItemTextElement.value = '';
    newItemValueElement.value = '';
}