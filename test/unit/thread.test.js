const request = require("supertest");
const app = require("../../app.js");
const db = require("../../src/db/index.js");
const { faker } = require("@faker-js/faker");

afterAll(() => {
  db.end();
});

describe("Test the thread path", () => {
  test("GET /api/thread", async () => {
    const response = await request(app).get("/api/thread");
    expect(response.statusCode).toBe(200);
  });

  test("POST /api/thread", async () => {
    const data = {
      title: faker.lorem.words(),
      user_id: 5,
    };
    const response = await request(app).post("/api/thread").send(data);
    expect(response.statusCode).toBe(201);
  });
});
