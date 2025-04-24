function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let accessories = Number(input[3]) / 100;
    let volume = length * width * height / 1000;
    let watter = volume - volume * accessories;
    console.log(watter)
}

fishTank(["105", "77", "89", "18.5"])