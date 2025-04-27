function winningTicket(inputString) {

    const isValidTicket = (ticket) => {
        let ticketLength = ticket.length;
        if (ticketLength === 20) {
            return true;
        }
        console.log('invalid ticket');
        return false;
    }
    const isMatched = (ticket) => {
        if ((/[@#$^]{6,}/).test(ticket)) {
            return true;
        }
        console.log(`ticket "${ticket}" - no match`);
        return false;
    }

    const winningTicket = /[@#$^]{6,}/g;

    let ticketsArray = inputString.trim().split(/\s*,\s*/g);
    // console.log(ticketsArray);
    for (let ticket of ticketsArray) {
        if (!isValidTicket(ticket)) {
            continue;
        }
        if (!isMatched(ticket)) {
            continue;
        }
        let matchedTicketArray = [...ticket.matchAll(winningTicket)];
        // console.log(matchedTicketArray);
        let matchedTicketArrayLength = matchedTicketArray.length;
        if (matchedTicketArrayLength > 1){
            if (matchedTicketArray[0][0][0] === matchedTicketArray[1][0][0]) {
                let matchLength = Math.min(matchedTicketArray[0][0].length, matchedTicketArray[1][0].length);
                let matchSymbol = matchedTicketArray[0][0][0];
                console.log(`ticket "${ticket}" - ${matchLength}${matchSymbol}`);                
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        } else if (matchedTicketArrayLength === 1 && matchedTicketArray[0][0].length === 20){
            let matchLength = matchedTicketArray[0][0].length / 2;
            let matchSymbol = matchedTicketArray[0][0][0];
            console.log(`ticket "${ticket}" - ${matchLength}${matchSymbol} Jackpot!`);
        } else {
            console.log(`ticket "${ticket}" - no match`);
        }
    }
}

// winningTicket('Cash$$$$$$Ca$$$$$$sh')
// console.log('-----------------------------------');
// winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')
// console.log('-----------------------------------');
// winningTicket('validticketnomatch:(')
// console.log('-----------------------------------');
winningTicket('@@@@@@e@@@@@er@@@@@@')