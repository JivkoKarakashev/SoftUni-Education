function radioCrystals(input) {

    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;
    let xRayCounter = 0;    

    let targetThickness = Number(input[0]);

    let cut = (processThickness) => {        
        while ((processThickness / 4) >= targetThickness) {
            cutCounter++;
            processThickness /= 4;
        }
        processThickness = transportAndWash(processThickness);
        console.log(`Cut x${cutCounter}`)
        console.log('Transporting and washing')
        return processThickness;
    }

    let transportAndWash = (processThickness) => Math.floor(processThickness);

    let lap = (processThickness) => {        
        while ((processThickness * 0.8) >= targetThickness) {
            lapCounter++;
            processThickness *= 0.8;
        }
        processThickness = transportAndWash(processThickness);
        console.log(`Lap x${lapCounter}`)
        console.log('Transporting and washing')
        return processThickness;
    }

    let grind = (processThickness) => {        
        while ((processThickness - 20) >= targetThickness) {
            grindCounter++;
            processThickness -= 20;
        }
        processThickness = transportAndWash(processThickness);
        console.log(`Grind x${grindCounter}`)
        console.log('Transporting and washing')
        return processThickness;
    }

    let etch = (processThickness) => {        
        while ((processThickness - 2) >= targetThickness - 1) {
            etchCounter++;
            processThickness -= 2;
        }
        processThickness = transportAndWash(processThickness);
        console.log(`Etch x${etchCounter}`)
        console.log('Transporting and washing')
        return processThickness;
    }

    let xRay = (processThickness) => {
        xRayCounter++;
        processThickness += 1;
        console.log(`X-ray x${xRayCounter}`)
        return processThickness;
    }
    
    let inputLength = input.length;

    for (let i = 1; i < inputLength; i++) {
        let initialThickness = Number(input[i]);
        console.log(`Processing chunk ${initialThickness} microns`)
        while (initialThickness !== targetThickness) {
            if ((initialThickness / 4) >= targetThickness) {
                let cutResult = cut(initialThickness);
                initialThickness = cutResult;
            }
            else if ((initialThickness * 0.8) >= targetThickness) {
                let lapReult = lap(initialThickness);
                initialThickness = lapReult;
            } else if ((initialThickness - 20) >= targetThickness) {
                let grindResult = grind(initialThickness);
                initialThickness = grindResult;
            } else if ((initialThickness - 2) >= targetThickness - 1) {
                let etchResult = etch(initialThickness);
                initialThickness = etchResult;
            } else if (initialThickness === targetThickness - 1) {
                let xRayResult = xRay(initialThickness);
                initialThickness = xRayResult;
            }
        }
        cutCounter = 0;
        lapCounter = 0;
        grindCounter = 0;
        etchCounter = 0;
        xRayCounter = 0;
        
        console.log(`Finished crystal ${initialThickness} microns`)
    }
}

// radioCrystals([1375, 50000])
// radioCrystals([1000, 4000, 8100])
radioCrystals([1000, 1001])