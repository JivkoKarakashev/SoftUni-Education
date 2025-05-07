function getUserData() {
    let userData = {
        'email': '',
        'username': '',
        '_id': '',
        'accessToken': ''
    };

    const lsData = localStorage.getItem('userData');
    if (lsData) {
        const { email, username, _id, accessToken } = JSON.parse(lsData);
        userData = { ...userData, email, username, _id, accessToken };
    } else {
        userData = null;
    }

    return userData;
}

export {
    getUserData
}