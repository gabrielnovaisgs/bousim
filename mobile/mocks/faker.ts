import { en, base, pt_BR, Faker } from "@faker-js/faker";

export const faker = new Faker({
    locale: [base, en, pt_BR]
})