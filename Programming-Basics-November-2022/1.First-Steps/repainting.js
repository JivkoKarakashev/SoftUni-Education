function repainting (input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workTime = Number(input[3]);
    let addNylon = 2;
    let addPaint = paint * 10 / 100;
    let bags = 0.4;
    let materials = (nylon + addNylon) * 1.5  + (paint + addPaint) * 14.5 + thinner * 5 + bags;
    let payment = (materials * 30 / 100) * workTime;
    let total = materials + payment;
    console.log(total)

}

repainting(["10", "11", "4", "8"])