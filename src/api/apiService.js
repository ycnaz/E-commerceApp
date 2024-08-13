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

// async getAllOfType(endpoint) {
//     try {
//         const response = await axiosInstance.get(endpoint)
//         return response.data
//     } catch (error) {
//         errorHandler(error)
//     }
// },

// async getOneOfType(endpoint, id) {
//     try {
//         const response = await axiosInstance.get(`${endpoint}/${id}`)
//         return response.data
//     } catch (error) {
//         errorHandler(error)
//     }
// },

// async add(endpoint, data) {
//     try {
//         const response = await axiosInstance.post(endpoint, data)
//         return response.data
//     } catch (error) {
//         errorHandler(error)
//     }
// },

// async update(endpoint, id, method, data) {
//     try {
//         let response;
//         if (method === 'patch') {
//             response = await axiosInstance.patch(`${endpoint}/${id}`, data)
//         } else if (method === 'put') {
//             response = await axiosInstance.put(`${endpoint}/${id}`, data)
//         } else {
//             errorHandler('Use patch or put method only!')
//         }
//         return response.data
//     } catch (error) {
//         errorHandler(error)
//     }
// },

// async delete(endpoint, id) {
//     try {
//         const response = await axiosInstance.delete(`${endpoint}/${id}`)
//         return response.data
//     } catch (error) {
//         errorHandler(error)
//     }
// },