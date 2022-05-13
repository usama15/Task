import axios from 'axios';
const baseUrl = 'https://fakestoreapi.com';

export async function apiService(method, uri, data, params) {
    console.log(arguments);
    let query = {
        method: method,
        url: uri ? baseUrl + uri : baseUrl,
    };
    if (params !== null) {
        query.params = params;
    }

    if (
        method === 'post' ||
        method === 'put' ||
        method === 'delete' ||
        method === 'patch'
    ) {
        query.data = data;
    }

    return axios(query);
}
