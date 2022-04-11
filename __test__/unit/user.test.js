const request = require("supertest");
const app = require("../../app.js");

describe("Test the user path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get('/api/user');
    expect(response.statusCode).toBe(200);
  });
});
