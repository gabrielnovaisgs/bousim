import  { setupMocks } from "@/mocks/mockRequests";
import axios from "axios";



export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

if (__DEV__) setupMocks(axiosInstance)
export default axiosInstance