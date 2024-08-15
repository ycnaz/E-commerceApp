import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://openexchangerates.org/api',
    headers: { 'Content-Type': 'application/json' }
})

const errorHandler = (error) => {
    console.error('API error:', error)
    throw error
}

export async function fetcher(endpoint) {
    try {
        const response = await axiosInstance.get(endpoint)
        return response.data
    } catch (error) {
        errorHandler(error)
    }
}