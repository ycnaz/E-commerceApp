import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: { 'Content-Type': 'application/json' }
})

const errorHandler = (error) => {
    console.error('API error:', error)
    throw error
}

export async function fetcher(endpoint, method, data = null) {
    let response;
    try {
        switch(method.toLowerCase()) {
            case 'post':
                response = await axiosInstance.post(endpoint, data)
                break;
            
            case 'get':
                response = await axiosInstance.get(endpoint)
                break;
            
            case 'patch':
                response = await axiosInstance.patch(endpoint, data)
                break;
    
            case 'put':
                response = await axiosInstance.put(endpoint, data)
                break;
    
            case 'delete':
                response = await axiosInstance.delete(endpoint)
                break;

            default:
                errorHandler(`Unsupported API method: ${method}`)
        }
        return response.data
    } catch (error) {
        errorHandler(error)
    }
}
