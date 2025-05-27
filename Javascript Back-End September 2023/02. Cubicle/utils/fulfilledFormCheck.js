function fulfilledformCheck(formEntries) {
    // console.log(formEntries);
    const missingFields = Object.entries(formEntries).filter(([key, value]) => value == false);
    if (missingFields.length > 0) {
        const resultErrors = [];
        for (let [key, value] of missingFields) {
            const errObj = {};
            errObj['msg'] = `${key} is required!`;
            errObj['path'] = key;
            resultErrors.push(errObj);
        }
        // console.log(resultErrors);
        throw resultErrors;
    }
}

module.exports = fulfilledformCheck;