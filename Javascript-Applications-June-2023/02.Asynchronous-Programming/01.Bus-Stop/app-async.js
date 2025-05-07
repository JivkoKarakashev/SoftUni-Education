async function getInfo() {
    const stopIdInputElement = document.querySelector('#stopId');
    const stopNameDivElement = document.querySelector('#stopName');
    const busesUlElement = document.querySelector('#buses');
    busesUlElement.replaceChildren();
    const busId = stopIdInputElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;
    // console.log(url);
    // console.log(stopIdInputElement.value);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await response.json();
        const resultArray = Object.entries(data.buses);
        // console.log(resultArray);
        stopNameDivElement.textContent = data.name;
        resultArray.forEach(bus => {
            let [busId, time] = bus;
            const liEl = document.createElement('li');
            liEl.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesUlElement.appendChild(liEl);
        });
    } catch (error) {
        stopNameDivElement.textContent = 'Error';
    }
}