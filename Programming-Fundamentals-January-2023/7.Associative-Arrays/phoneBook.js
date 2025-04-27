function phoneBook(inputArray){

    const phoneBook = {};
    inputArray.forEach(el => {
        let [name, phone] = el.split(' ');
        phoneBook[name] = phone;
    });

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}

phoneBook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344'])