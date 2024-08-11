function addItem() {
    const inputItemElement = document.querySelector('#newItemText');
    const itemElementList = document.querySelector('#items');

    const newInputItemElement = document.createElement('li');
    newInputItemElement.textContent = inputItemElement.value;

    const deleteItemElement = document.createElement('a');
    deleteItemElement.textContent = '[Delete]'
    deleteItemElement.href = '#';

    newInputItemElement.appendChild(deleteItemElement);

    deleteItemElement.addEventListener('click', () => {
        newInputItemElement.remove();
    });

    itemElementList.appendChild(newInputItemElement);
    inputItemElement.value = '';
}