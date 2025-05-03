import  Config  from 'react-native-config';
import { z } from 'zod';
const envSchema = z.object({
    EXPO_PUBLIC_MOCK_DATA: z.coerce.boolean().default(false),
    EXPO_PUBLIC_API_URL: z.string().url().default('http://localhost:3000'),
})

const envParsed = envSchema.safeParse(process.env)
if (!envParsed.success) {
    throw new Error(`Invalid environment variables: ${envParsed.error.message}`)
}
const env = envParsed.data

export default env

