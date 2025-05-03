import env from "@/env/env";
import  { setupMocks } from "@/mocks/mockRequests";
import axios from "axios";



export const axiosInstance = axios.create({
    baseURL: env.EXPO_PUBLIC_API_URL
})

if (env.EXPO_PUBLIC_MOCK_DATA) setupMocks(axiosInstance)
export default axiosInstance