function buildAWall(sectionsArray){

    let outputArray = [];
    sectionsArray = sectionsArray.map(Number);
    let sectionsCount = sectionsArray.length;    
    let totalAccumulatedHeights = sectionsCount * 30;
    let currentAccumulatedHeights = sectionsArray.reduce((sum, current) => sum += current, 0);    
    let totalConcreteQuantity = 0;
    
    let daylySectionsProcess = (secsArr, outputArr) =>{
        
        let dailyConcreteQuantity = 0;
        let dailyCrewCount = 0;
        for (let i = 0; i <secsArr.length; i++){            
            let currSection = secsArr[i];
            if (currSection < 30){
                currSection += 1;
                dailyCrewCount++;      
                secsArr[i] = currSection;
            }                      
        }
        dailyConcreteQuantity = dailyCrewCount * 195;
        outputArr.push(dailyConcreteQuantity);
        return secsArr;
    }

    while (currentAccumulatedHeights < totalAccumulatedHeights){
        sectionsArray = daylySectionsProcess(sectionsArray, outputArray);
        currentAccumulatedHeights = sectionsArray.reduce((sum, current) => sum += current, 0);
    }

    for (let concretePerDay of outputArray){
        totalConcreteQuantity += concretePerDay;
    }    
    console.log(outputArray.join(', '));
    console.log(`${totalConcreteQuantity * 1900} pesos`)
}

buildAWall(['21', '25', '28'])
console.log('---------------------------------------------------------------')
buildAWall([17])
console.log('---------------------------------------------------------------')
buildAWall([17, 22, 17, 19, 17])