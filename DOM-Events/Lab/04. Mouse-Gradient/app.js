function attachGradientEvents() {
    const gradientElement = document.querySelector('#gradient');
    const resultElement = document.querySelector('#result');

    gradientElement.addEventListener('mousemove', (e) => {
        const currentWidth = e.offsetX;
        const elementWidth = e.target.clientWidth;

        const progress = Math.floor((currentWidth / elementWidth) * 100);

        resultElement.textContent = `${progress}%`;


    });
}