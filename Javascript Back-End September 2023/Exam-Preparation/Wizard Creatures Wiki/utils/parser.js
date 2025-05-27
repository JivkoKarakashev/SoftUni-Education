function parseError(error) {
    if (error.name == 'ValidationError') {
        // Mongoose errors
        return Object.values(error.errors).map((value) => value.message);
    } else if (Array.isArray(error)) {
        // Express validator
        return error.map((err) => err['msg']);
    } else {
        // Process errors
        return error.message.split('\n');
    }
}

module.exports = {
    parseError,
};