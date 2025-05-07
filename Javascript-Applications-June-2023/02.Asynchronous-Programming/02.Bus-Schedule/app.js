function solve() {

    const divInfoBoxElement = document.querySelector('.info');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
    // let stopId = 'asda';
    let stopId = 'depot';
    let currStopName = '';
    // console.log(divInfoBoxElement);

    const resultUrl = (baseUrl, stopId) => {
        return `${baseUrl}${stopId}`
    };
    const resultResponse = () => {
        if (departButton.disabled === true) {
            let url = resultUrl(baseUrl, stopId);
            const response = fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            });
            response
                .then((resp) => resp.json())
                .then(data => {
                    let stopName = data.name;
                    currStopName = stopName;
                    let nextStopId = data.next;
                    stopId = nextStopId;
                    divInfoBoxElement.textContent = `Next stop ${stopName}`;
                })
                .catch((err) => {
                    divInfoBoxElement.textContent = 'Error';
                    departButton.setAttribute('disabled', 'disabled');
                    arriveButton.setAttribute('disabled', 'disabled');
                });
        } else {
            divInfoBoxElement.textContent = `Arriving at ${currStopName}`;
        }
    };

    function depart() {
        departButton.setAttribute('disabled', 'disabled');
        arriveButton.removeAttribute('disabled');
        resultResponse();
    }

    function arrive() {
        departButton.removeAttribute('disabled');
        arriveButton.setAttribute('disabled', 'disabled');
        resultResponse();
    }

    return {
        depart,
        arrive
    };
}

let result = solve();