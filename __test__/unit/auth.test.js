const request = require("supertest");
const app = require("../../app.js");
const db = require("../../src/db/index.js");
const { faker } = require("@faker-js/faker");

afterAll(() => {
  db.end();
});

describe("Test the auth path", () => {
  test("POST /api/auth/register", async () => {
    const data = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const response = await request(app).post("/api/auth/register").send(data);

    expect(response.statusCode).toBe(201);
  });
});
