function cats(inputArray){

    class Cat {
        constructor(nameValue, ageValue){
            this.name = nameValue;
            this.age = ageValue;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    
    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++){
        let currCatLine = inputArray[i].split(' ');
        let [catName, catAge] = [...currCatLine];

        let currentCat = new Cat(catName, catAge);
        currentCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5'])
console.log('---------------------------')
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])