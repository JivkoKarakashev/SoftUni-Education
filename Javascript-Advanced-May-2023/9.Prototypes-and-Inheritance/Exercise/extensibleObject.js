function extensibleObject() {

    const proto = {};
    const extensible = Object.create(proto);

    const extensibleProto = Object.getPrototypeOf(extensible);
    extensible.extend = function (template) {
        for (const key in template) {
            if (typeof template[key] === 'function') {
                extensibleProto[key] = template[key];
            }
            extensible[key] = template[key];
        }
    };
    return extensible;
}

// const myObj = extensibleObject();

// const template = {
//     extensionMethod: function () { },
//     extensionProperty: 'someString'
// };

// myObj.extend(template);
// console.log(myObj);
// console.log(Object.getPrototypeOf(myObj).hasOwnProperty('extensionMethod'));
// console.log(myObj.hasOwnProperty('toString'));
// console.log(Object.getPrototypeOf(myObj));