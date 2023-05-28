const request = require("supertest");
const app = require ("../../../../app");

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
            name: "CIVIC",
            price: 20000,
            size: "SMALL",
            image: "https://source.unsplash.com/506x506"
        }
        console.log(jwtTokenAdmin);

        return await request(app).put("/v1/cars/1").set("Authorization", `Bearer ${jwtTokenAdmin}`).send(payloadUpdate).then((res) => {
            expect(res.statusCode).toBe(200);
        });
    });
});