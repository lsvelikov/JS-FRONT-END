function addItem() {
    const items = document.querySelector('#items');
    const textToAppend = document.getElementById('newItemText');

    const newLi = document.createElement('li');
    newLi.textContent = textToAppend.value;
    
    items.appendChild(newLi);
    textToAppend.value = '';
}