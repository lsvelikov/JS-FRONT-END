function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    const infoElement = document.querySelector('.info');
    const departBtnElement = document.getElementById('depart');
    const arriveBtnElement = document.getElementById('arrive');
    let stopId = 'depot';
    let nextStop = '';

    function depart() {

        fetch(`${baseUrl}/${stopId}`)
            .then(response => response.json())
            .then(data => {
                infoElement.textContent = `Next stop ${data.name}`;

                stopId = data.next;
                nextStop = data.name;
                arriveBtnElement.disabled = false;
                departBtnElement.disabled = true;
            })
            .catch((error) => {
                infoElement.textContent = 'Error';
                departBtnElement.disabled = true;
                arriveBtnElement.disabled = true;
            });
    }

    async function arrive() {

        infoElement.textContent = `Arriving at ${nextStop}`;
        arriveBtnElement.disabled = true;
        departBtnElement.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();