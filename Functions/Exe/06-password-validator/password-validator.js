function passwordValidator(input) {

    function isValidLength(text) {
        return text.length >= 6 && text.length <= 10;
    }

    function isAlphanumeric(text) {
        let regex = /^[a-zA-Z0-9]+$/;
        let isCorrect = regex.test(text);

        return isCorrect;
    }

    function checkDigits(text) {

        let digitCounter = 0;
        for (let digit of text) {
            if (!isNaN(digit)) {
                digitCounter++;
            }
        }
        return digitCounter >= 2;
    }

    if (!isValidLength(input)) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isAlphanumeric(input)) {
        console.log('Password must consist only of letters and digits');
    }
    if (!checkDigits(input)) {
        console.log('Password must have at least 2 digits');
    }

    if (isValidLength(input) && isAlphanumeric(input) && checkDigits(input)) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');