import {
    GUIDE_IMG_EXTENSION, HTTPS, SWAPI_PARAM_PAGE, SWAPI_PEOPLE, SWAPI_ROUTE, URL_IMG_PERSON,
} from '../constants/api';

export const getPeoplePageId = (url) => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
    return Number(id);
};

const getId = (url, category) => {
    const id = url.replace(HTTPS + SWAPI_ROUTE + category, '').replace(/\//g, '');
    return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);
export const getPeopleImage = (id) => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
