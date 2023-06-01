const request = require("supertest");
const app = require ("../../../../app");

jest.useFakeTimers('legacy')

describe("PUT /v1/cars/:id",() => {
    let jwtTokenAdmin = ''
    beforeAll(async () => {
        const user = {
            email: "messi@binar.co.id",
            password: "admin123"
        }
        const response = await request(app).post('/v1/auth/login').send(user);
        jwtTokenAdmin = response.body.accessToken;
      });

    it("Update data cars success response with 200 as status code", async () => {
        const payloadUpdate = {
            name: "COROLLA",
            price: 20000,
            size: "SMALL",
            image: "https://source.unsplash.com/506x506"
        }

        return await request(app).put("/v1/cars/1").set("Authorization", `Bearer ${jwtTokenAdmin}`).send(payloadUpdate).then((res) => {
            expect(res.statusCode).toBe(200);
        });
    });

    it("Update data cars FAILED: Unauthorized", async () => {
        const payloadUpdate = {
            name: "CIVIC",
            price: 20000,
            size: "SMALL",
            image: "https://source.unsplash.com/506x506"
        }

        return await request(app).put("/v1/cars/1").send(payloadUpdate).then((res) => {
            expect(res.statusCode).toBe(401);
        });
    })
});