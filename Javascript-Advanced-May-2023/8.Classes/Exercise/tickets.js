function tickets(ticketsArray, sortCriterion) {

    const resultArray = [];
    const sortFunc = (arr, criterion) => {
        if (criterion === 'price') {
            arr.sort((tickA, tickB) => tickA[criterion] - tickB[criterion]);
        } else {
            arr.sort((tickA, tickB) => tickA[criterion].localeCompare(tickB[criterion]));
        }
    };
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (const ticket of ticketsArray) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        resultArray.push(new Ticket(destination, price, status));
    }
    sortFunc(resultArray, sortCriterion);
    return resultArray;
}

console.log(tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'));
console.log('--------------------');
console.log(tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'));