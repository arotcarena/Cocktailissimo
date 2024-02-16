import { SiteConfig } from "../Config/SiteConfig";


export const apiFetch = async (entrypoint, options = {}) => {
    const response = await fetch(entrypoint, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        ...options
    });
    const data = await response.json();
    if(response.ok) {
        return data;
    }
    if(data.errors) {
        throw new ApiError(data.errors);
    }
    throw new Error('fetch error');
}

export class ApiError {
    errors;

    constructor(errors) {
        this.errors = errors;
    }
}


/**
 * 
 * @param {string} entrypoint 
 * @param {object} data 
 * @param {string} method 
 * @returns 
 */
export const prepareFetch = (entrypoint, data, method) => {
    let url = entrypoint;
    let options = {};

    if(method === 'GET') {
        let params = [];
        for(const [key, value] of Object.entries(data)) {
            params.push(key+'='+value);
        }
        if(params.length > 0) {
            url += '?' + params.join('&');
        }
    } else if(method === 'POST') {
        options = {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
    }

    return [url, options];
}



/**
 * 
 * @param {string} entrypoint 
 * @param {Object} data 
 * @param {string} method 
 * @returns {Promise}
 */
export const apiPreparedFetch = (entrypoint, data = {}, method = 'GET') => {
    const [url, options] = prepareFetch(entrypoint, data, method);
    return apiFetch(url, options);
}



/**
 * 
 * @param {string} entrypoint 
 * @param {Object} data {key: value, key: value...} 
 * @returns {string} readyUrl
 */
export const addUrlParams = (entrypoint, data) => {
    const params = [];
    for(const [key, value] of Object.entries(data)) {
        params.push(`${key}=${value}`);
    }
    if(params.length > 0) {
        return entrypoint += '?' + params.join('&');
    }
    return entrypoint;
}




/**
 * 
 * @param {string} endpoint 
 * @param {Object} data 
 * @param {string} method 
 * @returns 
 */
export const apiSendcloudFetch = async (endpoint, data = {}, method = 'GET') => {
    let options = {};
    let url = endpoint;
    const authorization = 'Basic '+  window.btoa(SiteConfig.SENDCLOUD_PUBLIC_KEY+':'+SiteConfig.SENDCLOUD_PRIVATE_KEY);

    switch(method) {
        case 'GET':
            options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: authorization
                },
            };
            url = addUrlParams(endpoint, data);
            break;
        case 'POST':
            options = {
                method: 'POST',
                headers: {
                    'Sendcloud-Partner-Id': '',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': authorization
                },
                body: JSON.stringify(data),
            };
            break;
        default:
            //
    }

    //API RELAIS POUR LES TESTS (car CORS empêche les requêtes depuis localhost)
    const result = await apiPreparedFetch('/tests/apiSendcloud', {
        method: method,
        data: data,
        endpoint: url
    }, 'POST');
    return result;
}