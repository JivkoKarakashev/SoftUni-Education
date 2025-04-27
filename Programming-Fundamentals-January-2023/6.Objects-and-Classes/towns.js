function towns(inputArray){

    class Town{
        constructor(name, latitude, longitude){
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
        print = () => console.log(`{ town: '${this.name}', latitude: '${this.latitude.toFixed(2)}', longitude: '${this.longitude.toFixed(2)}' }`)  
    }

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++){
        let currentTownArray = inputArray[i].split(' | ');
        let [tName, tLatitude, tLongitude] = [...currentTownArray];
        tLatitude = Number(tLatitude);
        tLongitude = Number(tLongitude);
        let newTown = new Town(tName, tLatitude, tLongitude);
        newTown.print();
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])
console.log('--------------------------------------------------------')
towns(['Plovdiv | 136.45 | 812.575'])