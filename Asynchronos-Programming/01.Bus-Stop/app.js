function getInfo() {
    
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    const stopIdElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');

    const stopId = stopIdElement.value;
    fetch(`${baseUrl}/${stopId}`)
    .then(response => response.json())
    .then(data => {

        stopNameElement.textContent = data.name;

        for(const bus in data.buses) {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrive in ${data.buses[bus]} minutes`;
            busesElement.appendChild(liElement);
        }
    })
    .catch(() => stopNameElement.textContent = 'Error');
}