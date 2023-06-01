const ApplicationController = require("./ApplicationController");
const request = require("supertest");
const app = require ("../../app");

describe("ApplicationController", () => {
    describe("handleGetRoot", () => {
        it("should call response status 200 and response json running project", async () => {
            const status = "OK";
            const message = "BCR API is up and running!"
            return await request(app).get("/").then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual(
                    expect.objectContaining({
                        status,
                        message,
                    }),
                )
            });
        })
    })
    describe("handleNotFound", () => {
        it("should call response status 404 and response json not found route", async () => {
            const method = "GET";
            const url = "/v1/car";
            const message = "Not found!";
            const name = "Error";
            const details = {
                method,
                url,
            }
            const error = {
                name,
                message,
                details,
            };
            return await request(app).get("/v1/car").then((res) => {
                expect(res.statusCode).toBe(404);
                expect(res.body).toEqual(
                    expect.objectContaining({
                        error,
                    }),
                )
            });
        })
    })
})