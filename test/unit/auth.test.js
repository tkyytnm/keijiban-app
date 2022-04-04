const request = require('supertest');
const app = require('../../app.js');

describe("Test the auth path", () => {
  test("It should return the user object", async () => {
    const expectedResult = {};
    const userData = { };
    const response = await request(app).post("/api/auth").send(userData);
    expect(response).toEqual(expectedResult);
  })
});