import axios from 'axios'

const apiUri = process.env.NEXT_API_URI || "http://localhost:3000/api";
export const apiFetcher = axios.create({
    baseURL: apiUri,
    headers: {
        'Content-Type': 'application/json'
    },
    responseEncoding: 'utf8',
    responseType: 'json',
});