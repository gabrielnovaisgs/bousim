import { AxiosInstance } from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

export function setupMocks(axiosInstance: AxiosInstance) {

    const mock = new AxiosMockAdapter(axiosInstance)
    
    mock.onGet('/api/transactions').reply(200, {
        data: [
            {
                id:4 ,
                amount: 100,
                date: '2021-01-01'
            },
            {
                id: 2,
                amount: 200,
                date: '2021-01-02'
            }
        ]
    })
}


