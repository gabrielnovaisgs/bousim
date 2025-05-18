import { z } from "zod";

const envSchema = z.object({
    SHEETS_ID: z.coerce.number(),
    SPREADSHEET_ID: z.string(),
})

const envValidation = envSchema.safeParse(process.env);
if (!envValidation.success) {
    console.error("Invalid environment variables:", envValidation.error.format());
    throw new Error("Invalid environment variables");
}
export const env = envValidation.data;