const request = require("supertest")
const app = require("../app")

describe("Users API", () => {
  it("should return users", async () => {
    const res = await request(app).get("/users")

    expect(res.statusCode).toBe(200)
  })
})