import { HTTPS, HTTP } from '../constants/api';

/*
* Change url HTTP to HTTPS
* @param {String} url - for change
* @returns {String} - url HTTPS
 */
export const changeHTTP = (url) => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result;
};

/*
* Send fetch to url
* @param {String} url - for change
* @returns {Promise} - Promise result
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
};

export const makeConcurrentRequest = async (url) => {
    const res = Promise.all(url.map((map) => fetch(map).then((res) => res.json())));

    return res;
};
