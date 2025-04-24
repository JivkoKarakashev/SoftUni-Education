function suppliesForSchool(input){
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let deskCleaner = Number(input[2]);
    let discountRate = Number(input[3] / 100);
    let subTotal = penPacks * 5.8 + markerPacks * 7.2 + deskCleaner * 1.2;
    let Total = subTotal - subTotal * discountRate;
    console.log(Total)
}

suppliesForSchool(["2", "3", "4", "25"])