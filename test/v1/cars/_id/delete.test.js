const request = require("supertest");
const app = require ("../../../../app");

jest.useFakeTimers('legacy')

describe("DELETE /v1/cars/:id",() => {
    let jwtTokenAdmin = ''
    beforeAll(async () => {
        const user = {
            email: "messi@binar.co.id",
            password: "admin123"
        }
        const response = await request(app).post('/v1/auth/login').send(user);
        jwtTokenAdmin = response.body.accessToken;
      });

    it("Delete data cars success response with 200 as status code", async () => {

        return await request(app).delete("/v1/cars/83").set("Authorization", `Bearer ${jwtTokenAdmin}`).then((res) => {
            expect(res.statusCode).toBe(204);
        });
    });

    it("Delete data cars FAILED: Unauthorized", async () => {
        return await request(app).delete("/v1/cars/83").then((res) => {
            expect(res.statusCode).toBe(401);
        });
    })
});