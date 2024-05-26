function extractText() {
    const itemsToAppend = document.querySelector('#items').textContent;
    const text = document.querySelector('#result');
    text.textContent = itemsToAppend;
}