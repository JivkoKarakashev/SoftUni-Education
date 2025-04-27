function addressBook(inputArray){

    const addressBookObj = {};
    inputArray.forEach(el => {
        let [name, address] = el.split(':');
        addressBookObj[name] = address;
    });

    const addressBookArr = Object.entries(addressBookObj);    
    const sortedAddressBookArr = addressBookArr.sort((nameA, nameB) => nameA[0].localeCompare(nameB[0]));
    
    sortedAddressBookArr.forEach(el => {
        let [name, address] = [...el];
        console.log(`${name} -> ${address}`)
    });
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])