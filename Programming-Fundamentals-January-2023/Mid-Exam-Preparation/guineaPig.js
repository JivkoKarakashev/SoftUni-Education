function guineaPig(inputArray) {

    inputArray = inputArray
        .map(Number)
        .map(x => x * 1000);
    let [food, hay, cover, pigWeight] = [...inputArray];
    
    for (let day = 1; day <= 30; day++){
        food -= 300;
        if (day % 2 === 0){
            hay -= (food * 0.05);
        }
        if (day % 3 === 0){
            cover -= (pigWeight / 3);
        }
        if (food <= 0 || hay <= 0 || cover <= 0){
            console.log('Merry must go to the pet store!')
            return;
        }
    }    
    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`)
}

guineaPig(["10",
    "5",
    "5.2",
    "1"])
console.log('-----------------------------------------------------------------------')
guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])
console.log('-----------------------------------------------------------------------')
guineaPig(["9",
"5",
"5.2",
"1"])