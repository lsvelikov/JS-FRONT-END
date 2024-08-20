function encodeAndDecodeMessages() {
    let encodeTextElement = document.getElementsByTagName('textarea')[0];
    let encodeButton = document.getElementsByTagName('button')[0];

    let decodeTextElement = document.getElementsByTagName('textarea')[1];
    let decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let message = encodeTextElement.value;
        let newMessage = '';

        for(let i = 0; i < message.length; i++) {
            let newText = String.fromCodePoint(message[i].charCodeAt(0) + 1);
            newMessage += newText;
        }

        decodeTextElement.value = newMessage;
        encodeTextElement.value = '';
    }

    function decodeMessage() {
        let message = decodeTextElement.value;
        let newMessage = '';

        for(let i = 0; i < message.length; i++) {
            let newText = String.fromCodePoint(message[i].charCodeAt(0) - 1);
            newMessage += newText;
        }

        decodeTextElement.value = newMessage;
        document.getElementsByTagName('button')[1].disabled = 'disabled';
    }

}