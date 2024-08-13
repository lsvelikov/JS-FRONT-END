function focused() {
    const inputElements = Array.from(document.querySelectorAll('input[type=text]'));

    inputElements.forEach(inputElement => inputElement.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused');
    })); 

    inputElements.forEach(inputElement => inputElement.addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focused');
    }));
}