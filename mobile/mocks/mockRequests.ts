import { AxiosInstance } from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { faker } from "./faker";

export function setupMocks(axiosInstance: AxiosInstance) {

    const mock = new AxiosMockAdapter(axiosInstance)
    
    mock.onGet('/api/transactions').reply(200, {
        data: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, () => 
            ({  
                id: faker.string.uuid(),
                amount: faker.finance.amount(),
                date: faker.date.recent()
            })
        )
        
    })

    mock.onPost('/api/auth/sign-in').reply(200, {
        data: {
            token_id: faker.string.uuid(),
            name: faker.person.firstName(),
            email: faker.internet.email()
        }
    })
}


