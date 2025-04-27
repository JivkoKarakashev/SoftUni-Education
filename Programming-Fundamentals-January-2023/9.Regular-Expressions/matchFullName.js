function matchFullName(inputString){

    const strPettern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    const validNamesArray = inputString.match(strPettern);
    console.log(validNamesArray.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")