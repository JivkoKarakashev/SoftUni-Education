function login(input){

    let index = 0;
    let userName = input[index];// i = 0
    let password = "";
    index++;                        // i = 1
    let currentInput = input[index];// i = 1
    let attempt = 1;
        

    for (let char = userName.length - 1; char >= 0; char--){
        let currentChar = userName[char];
        password += `${currentChar}`;
    }
    // console.log(password)

    while (currentInput !== password){
        if (attempt >= 4){
            isBlocked = true;
            break;
        }
        console.log("Incorrect password. Try again.")
        index++;                    // i = 2
        currentInput = input[index];// i = 2
        attempt++;
    }

    if (isBlocked){
        console.log(`User ${userName} blocked!`);
    }
    if (currentInput === password){
        console.log(`User ${userName} logged in.`)
    }
}

login(['Acer','login','go','let me in','recA'])