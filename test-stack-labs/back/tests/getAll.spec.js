const request = require('supertest');
const app = require('../app')
 
describe('Get all inventions', () => {
  test('GET /inventions', (done) => {
    request(app).get('/inventions').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(typeof response.body).toBe('object');
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(16);
      expect(response.body[0].date).toBeLessThan(response.body[15].date);

      done();
    });
  });
});