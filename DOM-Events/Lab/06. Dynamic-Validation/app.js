function validate() {
    const inputEmailElement = document.querySelector('#email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+/

    inputEmailElement.addEventListener('change', (e) => {
        if(!pattern.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}