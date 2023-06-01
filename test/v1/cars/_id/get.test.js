const request = require("supertest");
const app = require ("../../../../app");

jest.useFakeTimers('legacy')

describe("GET /v1/cars/:id", () => {
    it("Get cars succes response with 200 as status code", async ()=> {
        return await request(app).get("/v1/cars/39").then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toBeDefined();
        });
    })
})