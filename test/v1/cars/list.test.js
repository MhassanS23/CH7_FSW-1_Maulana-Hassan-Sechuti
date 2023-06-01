const request = require("supertest");
const app = require ("../../../app");
const {Car} = require("../../../app/models/car")

jest.useFakeTimers('legacy')

describe("GET /v1/cars",() => {
    test("Get cars success response with 200 as status code", async () => {
        // const name = "pajero";
        // const price = 30000;
        // const size = "SMALL";
        // const image = "https://source.unsplash.com/505x505";

        return await request(app).get("/v1/cars").then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toBeDefined();
        });
    });
});