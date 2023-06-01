const request = require("supertest");
const app = require ("../../../../app");

jest.useFakeTimers('legacy')

describe("POST /v1/cars/:id/rent",() => {
    let jwtTokenCustomer = ''
    beforeAll(async () => {
        const user = {
            email: "jayabaya@binar.co.id",
            password: "123456"
        }
        const response = await request(app).post('/v1/auth/login').send(user);
        jwtTokenCustomer = response.body.accessToken;
      });

    it("Rent cars success response with 201 as status code", async () => {
        const payloadRent = {
            rentStartedAt: "2023-05-29 08:12:40.519+07"
        }

        return await request(app).post("/v1/cars/30/rent").set("Authorization", `Bearer ${jwtTokenCustomer}`).send(payloadRent).then((res) => {
            expect(res.statusCode).toBe(201);
        });
    });

    it("Rent cars wrong input", async () => {
        const payloadRent = {
            rentStartedAt: "21/05/2023"
        }

        return await request(app).post("/v1/cars/5/rent").set("Authorization", `Bearer ${jwtTokenCustomer}`).send(payloadRent).then((res) => {
            expect(res.statusCode).toBe(500);
        });
    })

    it("Rent cars FAILED: Unauthorized", async () => {
        const payloadRent = {
            rentStartedAt: "2023-05-29 08:12:40.519+07"
        }

        return await request(app).post("/v1/cars/7/rent").send(payloadRent).then((res) => {
            expect(res.statusCode).toBe(401);
        });
    })
});