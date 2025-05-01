function requestValidator(obj) {
    const arr = Object.entries(obj);
    const requiredProperties = ['method', 'uri', 'version', 'message'];

    const uriRegEx = /^[\w+|\.]+$/;
    const messageRegEx = /^[^<>\\&'"\r]*?$/;

    for (let property of requiredProperties) {
        if (!obj.hasOwnProperty(property)) {
            let key = '';
            if (property === 'uri') {
                key = property.toLocaleUpperCase();
            } else {
                key = property[0].toLocaleUpperCase().concat(property.slice(1));
            }
            throw new Error(`Invalid request header: Invalid ${key}`); 
            // return (`Invalid request header: Invalid ${key}`);
        }
    }

    for (let [key, value] of arr) {
        let property = '';
        if (key === 'uri') {
           property = key.toLocaleUpperCase();
        } else {
            property = key[0].toLocaleUpperCase().concat(key.slice(1));
        }
        if (key === 'method') {
            if (value !== 'GET' && value !== 'POST' && value !== 'DELETE' && value !== 'CONNECT') {
                throw new Error(`Invalid request header: Invalid ${property}`);
                // return (`Invalid request header: Invalid ${property}`);
            }
        } else if (key === 'uri') {
            if (!uriRegEx.test(value)) {
                throw new Error(`Invalid request header: Invalid ${property}`);
                // return (`Invalid request header: Invalid ${property}`);
            }
        } else if (key === 'version') {
            if (value !== 'HTTP/0.9' && value !== 'HTTP/1.0' && value !== 'HTTP/1.1' && value !== 'HTTP/2.0') {
                throw new Error(`Invalid request header: Invalid ${property}`);
                // return (`Invalid request header: Invalid ${property}`);
            }
        } else if (key === 'message') {
            if (!messageRegEx.test(value)) {
                throw new Error(`Invalid request header: Invalid ${property}`);
                // return (`Invalid request header: Invalid ${property}`);
            }
        }
    }
    return obj;
}

console.log(requestValidator(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }))
console.log('----------------------');
console.log(requestValidator(
    {
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    }))
console.log('----------------------');
console.log(requestValidator(
    {
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
    }))
console.log('----------------------');
console.log(requestValidator(
    {
        method: 'POST',
        uri: '',
        version: 'HTTP/2.0',
        message: ''
    }))