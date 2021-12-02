import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

export default function getSecondSectionData() {
    try {
        const data = axios.get('/sec2');
        console.log(`dataInApi`, data)
        return data
    } catch (error) {
        
    }
}