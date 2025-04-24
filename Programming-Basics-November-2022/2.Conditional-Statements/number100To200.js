function number100To200(input){
    if(input[0] < 100){
        console.log("Less than 100");
    }
    else if(input[0] >= 100){
        if(input[0] <= 200){
            console.log("Between 100 and 200");
        }
        else{
            console.log("Greater than 200");
        }
    }
}

number100To200 (["201"])