function area() { return Math.abs(this.x * this.y); }
function vol() { return Math.abs(this.x * this.y * this.z); };

function areaAndVolumeCalculator(area, vol, inputStr) {

    const objsArray = JSON.parse(inputStr).map(obj => {
        return {
            area: area.call(obj),
            volume: vol.call(obj),
        };
    });

    return objsArray;
}

console.log(areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));
console.log('--------------------------------');
console.log(areaAndVolumeCalculator(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`));