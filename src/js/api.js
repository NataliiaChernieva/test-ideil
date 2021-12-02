import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

export function getFirstSectionData() {
    try {
        const data = axios.get('/sec1');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        console.log(`error`, error)
    }
}

export function getSecondSectionData() {
    try {
        const data = axios.get('/sec2');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        console.log(`error`, error)
    }
}

export function getPopularNowData() {
    try {
        const data = axios.get('/popular-now');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        console.log(`error`, error)
    }
}
