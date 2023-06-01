const request = require("supertest");
const app = require ("../../../app");

jest.useFakeTimers('legacy')

describe("GET /v1/auth/whoami",() => {
    let jwtTokenUser = ''
    beforeAll(async () => {
        const user = {
            email: "fikri@binar.co.id",
            password: "123456"
        }
        const response = await request(app).post('/v1/auth/login').send(user);
        jwtTokenUser = response.body.accessToken;
      });

    it("Check user status success response with 200 as status code", async () => {

        return await request(app).get("/v1/auth/whoami").set("Authorization", `Bearer ${jwtTokenUser}`).then((res) => {
            expect(res.statusCode).toBe(200);
        });
    });
});