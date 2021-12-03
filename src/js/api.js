import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

export async function getFirstSectionData() {
    try {
        const data = await axios.get('/sec1');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        console.log(`error`, error)
    }
}

export async function getSecondSectionData() {
    try {
        const data = await axios.get('/sec2');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        console.log(`error`, error)
    }
}

export async function getPopularNowData() {
    try {
        const data = await axios.get('/popular-now');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        console.log(`error`, error)
    }
}

export async function getAllMaterialData() {
    try {
        const data = await axios.get('/popular-now');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        console.log(`error`, error)
    }
}

export async function getBeautyCountryData() {
    try {
        const data = await axios.get('/beauty-country');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        console.log(`error`, error)
    }
}

export async function getUkraineData() {
    try {
        const data = await axios.get('/ukraine');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        console.log(`error`, error)
    }
}
