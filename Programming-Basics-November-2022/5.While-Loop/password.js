function password(input) {

    let index = 0;
    let userName = input[index];
    index++;
    let userPass = input[index];
    index++;
    let typedPass = input[index];
    index++;

    while (userPass !== typedPass) {

        typedPass = input[index]
        index++;
    }
    console.log(`Welcome ${userName}!`)

}

password (["Gosho",
"secret",
"secret"])

