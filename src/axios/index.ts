import axios from 'axios'

export const apiFetcher = axios.create({
    baseURL: "/api",
    headers: {
        'Content-Type': 'application/json'
    },
    responseEncoding: 'utf8',
    responseType: 'json',
});