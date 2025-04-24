function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    // let roomType = "";

    for (let f = floors; f >= 1; f--) {
        let roomType = "";
        for (let r = 0; r < rooms; r++) {            
            if (f === floors) {                
                roomType += `L${f}${r} `                
            }
            else if( f % 2 === 0){
                roomType += `O${f}${r} `                
            }
            else{
                roomType += `A${f}${r} `                
            }
        }
        console.log(roomType)
    }

}

building (["4", "4"])