function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const inputNameElement = document.querySelector('input[name=author]');
    const inputCommentElement = document.querySelector('input[name=content]');
    const submitBtnElement = document.querySelector('#submit');
    const refreshBtnElement = document.querySelector('#refresh');
    const textarea = document.querySelector('#messages');

    submitBtnElement.addEventListener('click', async() => {

        const messageFormat = {
            author: inputNameElement.value,
            content: inputCommentElement.value,
        };

        const isValid = inputNameElement !== '' && inputCommentElement !== '';
        if(isValid) {
            await fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(messageFormat)
            });
        }
        
        inputNameElement.value = '';
        inputCommentElement.value = '';

    });

    refreshBtnElement.addEventListener('click', async() => {

        const response = await fetch(baseUrl);
        const messages = await response.json();
        const allMessages = [];

        for (const message of Object.values(messages)) {
            allMessages.push(`${message.author}: ${message.content}`);
        }

        textarea.textContent = allMessages.join('\n');
    });
}

attachEvents();