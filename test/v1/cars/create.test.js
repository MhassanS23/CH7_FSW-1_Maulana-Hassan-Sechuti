const request = require("supertest");
const app = require ("../../../app");

jest.useFakeTimers('legacy')

describe("POST /v1/cars", () => {
    let jwtTokenAdmin = ''
    beforeAll(async () => {
        const user = {
            email: "messi@binar.co.id",
            password: "admin123"
        }
        const response = await request(app).post('/v1/auth/login').send(user);
        jwtTokenAdmin = response.body.accessToken;
      });

    it("Create data cars success response with 200 as status code", async ()=> {
        const payload = {
            name: "pajero",
            price: 20000,
            size: "SMALL",
            image: "https://source.unsplash.com/506x506"
        }
        return await request(app).post("/v1/cars").set("Authorization", `Bearer ${jwtTokenAdmin}`).send(payload).then((res) => {
            expect(res.statusCode).toBe(201);
        });
    })

    it("Create data cars FAILED: Unauthorized", async () => {
        const payload = {
            name: "pajero",
            price: 20000,
            size: "SMALL",
            image: "https://source.unsplash.com/506x506"
        }
        return await request(app).post("/v1/cars").send(payload).then((res) => {
            expect(res.statusCode).toBe(401);
        });
    })
})