const request = require("supertest");
const app = require ("../../../app");

jest.useFakeTimers('legacy')

describe("Car Already Rented Error",() => {
    let jwtTokenCustomer = ''
    beforeAll(async () => {
        const user = {
            email: "jayabaya@binar.co.id",
            password: "123456"
        }
        const response = await request(app).post('/v1/auth/login').send(user);
        jwtTokenCustomer = response.body.accessToken;
      });

    it("Cars already rented response with 422 as status code", async () => {
        const payloadRent = {
            rentStartedAt: "2023-05-29 08:12:40.519+07"
        }

        return await request(app).post("/v1/cars/30/rent").set("Authorization", `Bearer ${jwtTokenCustomer}`).send(payloadRent).then((res) => {
            expect(res.statusCode).toBe(422);
        });
    });
});