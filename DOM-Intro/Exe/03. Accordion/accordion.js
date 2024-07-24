function toggle() {

    const button = document.getElementsByClassName('button')[0];
    const textToShow = document.getElementById('extra');

    if(button.textContent === 'More') {
        button.textContent = 'Less';
        textToShow.style.display = 'block';
    } else {
        button.textContent = 'More';
        textToShow.style.display = 'none';
    }
}