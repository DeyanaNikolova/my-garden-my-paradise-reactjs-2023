const request = async (method, token, url, data) => {
    const options = {};
    if (method !== 'GET') {
        options.method = method;
        if (data) {
            options.headers = {
                'content-type': 'application/json'
            };
            options.body = JSON.stringify(data);
        }
    }
    if (token) {
        options.header = {
            ...options.header,
            'X-Autorization': token
        };
    }

    const response = await fetch(url, options);

    const result = await response.json();
    if (response.status === 204) {
        return;
    }

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const requestFactory = (token) => {
    return {
        get: request.bind(null, 'GET', token),
        post: request.bind(null, 'POST', token),
        put: request.bind(null, 'PUT', token),
        patch: request.bind(null, 'PATCH', token),
        del: request.bind(null, 'DELETE', token),
    }
}

