const request = require("supertest");
const app = require ("../../../app");

jest.useFakeTimers('legacy')

describe("LOGIN /v1/auth/login",() => {

    it("Login user success response with 201 as status code", async () => {
        const user = {
            email: "brian@binar.co.id",
            password: "123456"
        }

        return await request(app).post('/v1/auth/login').send(user).then((res) => {
            expect(res.statusCode).toBe(201);
        });
    });

    it("Login user FAILED: WRONG PASSWORD response with 401 as status code", async () => {
        const user = {
            email: "brian@binar.co.id",
            password: "1234567"
        }

        return await request(app).post('/v1/auth/login').send(user).then((res) => {
            expect(res.statusCode).toBe(401);
        });
    });

    it("Login user FAILED: EMAIL NOT REGISTERED response with 404 as status code", async () => {
        const user = {
            email: "briansamsul@binar.co.id",
            password: "123456"
        }

        return await request(app).post('/v1/auth/login').send(user).then((res) => {
            expect(res.statusCode).toBe(404);
        });
    });
});