function getUserData() {
    let userData = null;

    const lsData = localStorage.getItem('userData');
    if (lsData) {
        const { email, username, _id, accessToken } = JSON.parse(lsData);
        userData = { ...userData, email, username, _id, accessToken };
    }

    return userData;
}

function hasUser() {
    return !!getUserData();
}

export {
    getUserData,
    hasUser
}