function parseError(error) {
    // check type of error
    // if Array -> Express validator, take 'msg' and 'path' props from Array of Objs 
    // esle if error.name == ValidationError -> Mongoose validation, take error.entries(([field, props]) => [field, props.message])
    // else process regular error , take message prop
    // return { messages: [Strings], fields: Object }
    const result = {
        messages: [],
        fields: {},
    };

    if (error.name == 'ValidationError') {
        // Mongoose
        for (let [field, props] of Object.entries(error.errors)) {
            result.messages.push(props['message']);
            result.fields[field] = field;
        }
    } else if (Array.isArray(error)) {
        // Express validator
        result.messages = error.map((err) => err['msg']);
        result.fields = Object.fromEntries(error.map((err) => [err['path'], err['path']]));
    } else {
        // Process regular error
        result.messages.push(error.message);
    }
    return result;
}

module.exports = {
    parseError,
}