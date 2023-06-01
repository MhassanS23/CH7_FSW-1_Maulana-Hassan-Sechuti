const request = require("supertest");
const app = require ("../../../app");
const {InsufficientAccessError} = require("../../../app/errors")

jest.useFakeTimers('legacy')

describe("Test Insufficient Acces Error Class",() => {
    let role = ''
    beforeAll(async () => {
        let jwtToken = ""
        const user = {
            email: "ranggawarsita@binar.co.id",
            password: "123456"
        }
        const resp = await request(app).post('/v1/auth/login').send(user);
        jwtToken = resp.body.accessToken;
        const payloadUpdate = {
            name: "COROLLA",
            price: 20000,
            size: "SMALL",
            image: "https://source.unsplash.com/506x506"
        }
        const response = await request(app).put("/v1/cars/1").set("Authorization", `Bearer ${jwtToken}`).send(payloadUpdate)
        role = response.body.error.details.role;
      });

    it("Check error class", async () => {
        errorData = new InsufficientAccessError(role);
        expect(errorData.message).toBe("Access forbidden!");
    })
});