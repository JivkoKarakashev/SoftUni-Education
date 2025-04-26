function thePyramidOfKingDjoser (base, increment){

    let currentStage = Number(base);
    let stoneCounter = 0;
    let marbleCounter = 0;
    let lapisCounter = 0;
    let goldCounter = 0;
    let topLayer = Number.MIN_SAFE_INTEGER;

    if (base % 2 === 0){
        topLayer = base  / 2;
    }else{
        topLayer = Math.ceil(base / 2)
    }
    let pyramidHieght = Math.floor(topLayer * increment);
        
    for (let currentStep = 1; currentStage > 0; currentStep++){
        
        let decorativePerimeter = 4 * (currentStage - 1);
        let stoneArea = (currentStage - 2) * (currentStage - 2);
        // console.log(`Step: ${currentStep}`)
        // console.log(`DecorPerimeter: ${decorativePerimeter}`)
        // console.log(`StoneArea:  ${stoneArea}`)
        // console.log(`-------------------`)

        if (currentStep % 5 !== 0 && currentStep !== topLayer){
            marbleCounter += decorativePerimeter * increment;
            stoneCounter += stoneArea * increment;
        }else if (currentStep % 5 === 0 && currentStep !== topLayer){
            lapisCounter += decorativePerimeter * increment;
            stoneCounter += stoneArea * increment;
        }
        if (currentStep === topLayer){
            if (base % 2 !== 0){
                goldCounter += stoneArea * increment;
            }else{
                goldCounter += decorativePerimeter * increment;
            }
        }

        currentStage -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stoneCounter)}`)
    console.log(`Marble required: ${Math.ceil(marbleCounter)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisCounter)}`)
    console.log(`Gold required: ${Math.ceil(goldCounter)}`)
    console.log(`Final pyramid height: ${pyramidHieght}`)
}

thePyramidOfKingDjoser(12, 1)