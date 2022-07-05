import axios from "axios";

const API_HOST = process.env.API_HOST || 'http://localhost:3001';

export async function getRestaurants() {
    const {data} = await axios.get(`${API_HOST}/restaurants`)
    return data
}

export async function getRestaurant(id) {
    const {data} = await axios.get(`${API_HOST}/restaurant/${id}`)
    return data
}

export async function sendFeedback(id, body) {
    const {data} = await axios.post(`${API_HOST}/sendFeedback/${id}`, body)
    return data
}


export async function getFeedbacks(id) {
    const {data} = await axios.get(`${API_HOST}/feedback/${id}`)
    return data
}
