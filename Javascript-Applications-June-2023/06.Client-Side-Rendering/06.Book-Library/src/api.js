const host = 'http://localhost:3030';

async function request(method, url, data) {
    try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const options = {
            method,
            headers: {},
        };

        if (userData !== null) {
            options.headers['X-Authorization'] = userData['accessToken'];
        }
        if (data !== undefined) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }

        const response = await fetch(host + url, options);

        let result;

        if (response.status != 204) {
            result = await response.json();
        }

        if (response.ok === false) {
            if (response.status == 403) {
                localStorage.removeItem('userData');
            }
            const error = result;
            throw error;
        }

        return result;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');