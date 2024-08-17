function attachEventsListeners() {

    let daysElement = document.querySelector('#days');
    let daysButton = document.querySelector('#daysBtn');

    let hoursElement = document.querySelector('#hours');
    let hoursBtn = document.querySelector('#hoursBtn');

    let minutesElement = document.querySelector('#minutes');
    let minutesBtn = document.querySelector('#minutesBtn');

    let secondsElement = document.querySelector('#seconds');
    let secondsBtn = document.querySelector('#secondsBtn');

    daysButton.addEventListener('click', (e) => {
        hoursElement.value = daysElement.value * 24;
        minutesElement.value = hoursElement.value * 60;
        secondsElement.value = minutesElement.value * 60;
    });

    hoursBtn.addEventListener('click', (e) => {
        daysElement.value = hoursElement.value / 24;
        minutesElement.value = hoursElement.value * 60;
        secondsElement.value = minutesElement.value * 60;
    });

    minutesBtn.addEventListener('click', (e) => {
        hoursElement.value = minutesElement.value / 60;
        daysElement.value = hoursElement.value / 24;
        secondsElement.value = minutesElement.value * 60;
    });

    secondsBtn.addEventListener('click', (e) => {
        minutesElement.value = secondsElement.value / 60;
        hoursElement.value = minutesElement.value / 60;
        daysElement.value = hoursElement.value / 24;
    });
}