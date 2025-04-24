function cinemaTickets(input) {

    let index = 0;
    let currInput = input[index];       // i = 0
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let totalTickets = 0;
    
    while (currInput !== "Finish") {
        
        let currTitleTickets = 0;
        let currTitle = currInput;              // i = 0
        index++;                                // i = 1
        let freeSeats = Number(input[index]);   // i = 1        
        index++;                                // i = 2
        currInput = input[index];               // i = 2
        while (currInput !== "End") {
            currTitleTickets++;            
            totalTickets++;
            if (currInput === "student") {
                studentTickets++;
            }
            else if (currInput === "standard") {
                standardTickets++;
            }
            else if (currInput === "kid") {
                kidsTickets++;                
            }
            if (currTitleTickets >= freeSeats){                
                break;
            }
            index++;                            // i = 3
            currInput = input[index];           // i = 3
        }
        console.log(`${currTitle} - ${(currTitleTickets / freeSeats * 100).toFixed(2)}% full.`)
        index++;                        // i = 3
        currInput = input[index];       // i = 3
    }

    let studentTicketsRate = studentTickets / totalTickets * 100;
    let standardTicketsRate = standardTickets / totalTickets * 100;
    let kidsTicketsRate = kidsTickets / totalTickets * 100;    
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${studentTicketsRate.toFixed(2)}% student tickets.`)
    console.log(`${standardTicketsRate.toFixed(2)}% standard tickets.`)
    console.log(`${kidsTicketsRate.toFixed(2)}% kids tickets.`)

}

cinemaTickets (["Shutter Island",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Rush",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Deadpool",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Finish"])