function createAssemblyLine() {

    function hasClima(inputObj) {
        
        inputObj.temp = 21;
        inputObj.tempSettings = 21;
        inputObj.adjustTemp = () => {
            if (inputObj.temp < inputObj.tempSettings) {
                inputObj.temp += 1;
            } else if (inputObj.temp > inputObj.tempSettings) {
                inputObj.temp -= 1;
            }
        }
        return inputObj;
    }
    function hasAudio(inputObj) {

        inputObj.currentTrack = {
            name: 'null',
            artist: 'null',
        };
        inputObj.nowPlaying = () => {
            if (inputObj.currentTrack.name !== 'null' && inputObj.currentTrack.artist !== 'null') {
                console.log(`Now playing '${inputObj.currentTrack.name}' by ${inputObj.currentTrack.artist}`);
            }
        }
        return inputObj;
    }
    function hasParktronic(inputObj) {

        inputObj.checkDistance = (distance) => {
            if (distance < 0.1) {
                console.log('Beep! Beep! Beep!');
            } else if (distance < 0.25) {
                console.log('Beep! Beep!');
            } else if (distance < 0.5) {
                console.log('Beep!');
            }
        }
        return inputObj;
    }

    const createAssemblyLineObj = {
        hasClima,
        hasAudio,
        hasParktronic,
    };

    return createAssemblyLineObj;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
console.log('--------------------');
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
console.log('--------------------');
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log('--------------------');
console.log(myCar);
// createAssemblyLine()