// function solve(){
//     // console.log("Work!");
//     let a = 26 % 5;
//     // let b = 123 % 100;
//     let b = 210911.3665 % 11949.16;
//     console.log(a)
//     console.log(b)
// }

// solve()
///////////////////////////////////
///////////////////////////////////
// pass value to function
// let name = 'Pesho';

// function changeName(nAmE) {
//     nAmE = 'Gosho';
//     return nAmE;
// }

// let newName = changeName(name);
// console.log(name);
// console.log(newName);

// pass reference to function
// let info = {
//     name: 'Pesho',
//     age: 20,
// }

// function changeInfoName(obj) {
//     obj.name = 'gosho';
//     return obj.name;
// }

// changeInfoName(info);
// console.log(info)
// console.log(info.name)

// let newObj = info
// let changeInfoName = (obj, objKeyName, objKeyValue) => {   
//     let keyName = String(objKeyName);
//     obj.keyName = objKeyValue;
// }

// let gend  = 'womman';
// changeInfoName(newObj, gend);
// console.log(info);
// console.log(newObj);
///////////////////////////////////////////////////////
// function objectCreation(){

//     let info = {
//         firstName: 'Pesho',
//         lastName: 'Petrov',
//         age: 28,
//         eyeColor: 'brown',
//         isMale: true,
//     };

//     let objectProperties = Object.keys(info);
//     let objectValues = Object.values(info);
//     let objectEntries = Object.entries(info);
//     console.log(objectProperties);
// }
// objectCreation()
/////////////////////////////////////////////////////////////
// function regExpr(){

//     let str = "This isis a string.";
//     let occurCount = (str.match(/isa/g) || []).length;
//     console.log(occurCount);
// }

// regExpr()
//////////////////////////////
//////////////////////////////
function solve() {
    
    let arr = ['z', 's', 'a', 'd'];
    arr.sort((a, b) => b.localeCompare(a));
    console.log(arr);
}
solve()