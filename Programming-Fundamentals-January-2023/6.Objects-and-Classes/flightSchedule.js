function flightSchedule(inputArrays){

    const airPort = {};

    class Flight {
        constructor(flight, destination){
            this.flight = flight;
            this.destination = destination;
            this.status = 'Ready to fly';
        }
        printStatus(){
            console.log(`{ Destination: '${this.destination}', Status: '${this.status}' }`)
        }
    }

    let [flightsArr, flightStatusChangeArr, flightStatus] = [...inputArrays];
    flightStatus = flightStatus.join('');
    
    flightsArr.forEach(el => {
        let flightLine = el.split(' ');
        let [flight, ...destination] = [...flightLine];
        if (destination.length !== 1){
            destination = destination.join(' ');
        }
        const newFlight = new Flight(flight, destination);
        if (airPort.hasOwnProperty(flight)) {
            airPort[flight] = newFlight;
        } else {
            airPort[flight] = {};
            airPort[flight] = newFlight;
        }
    });
    // console.log(airPort)
    flightStatusChangeArr.forEach(el => {
        let flightChangeLine = el.split(' ');
        let [flight, statusChange] = [...flightChangeLine];
        if (airPort.hasOwnProperty(flight)){
            airPort[flight].status = statusChange;
        }
    });
    // console.log(airPort)
    for (const flight in airPort) {
        if (airPort[flight].status === flightStatus){
            airPort[flight].printStatus();
        }
    }
}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
])
console.log('----------------------------------------------------')
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])