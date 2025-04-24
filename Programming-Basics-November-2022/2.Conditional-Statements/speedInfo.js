function speedInfo(input){
    if(input[0] <= 10){
        console.log("slow");
    }
    else if(input[0] <= 50){
        console.log("average");
    }
    else if(input[0] <= 150){
        console.log("fast");
    }
    else if(input[0] <= 1000){
        console.log("ultra fast");
    }
    else{
        console.log("extremely fast");
    }
}

speedInfo (["1000000"])