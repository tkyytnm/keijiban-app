const request = require("supertest");
const app = require("../../app.js");
const db = require("../../src/db/index.js");
const { faker } = require("@faker-js/faker");

afterAll(() => {
  db.end();
});

describe("Test the comment path", () => {
  test("POST /api/comment", async () => {
    const newComment = {
      body: faker.animal.bear(),
      thread_id: 10,
      user_id: 5,
    };

    const response = await request(app).post("/api/comment").send(newComment);

    expect(response.statusCode).toBe(201);
  });

  test("GET /api/comment/:thread_id", async () => {
    const response = await request(app).get("/api/comment/10");

    expect(response.statusCode).toBe(200);
  });

  test("DELETE /api/comment/:id", async () => {
    const response = await request(app).delete("/api/comment/50");

    expect(response.statusCode).toBe(200);
  });
});
