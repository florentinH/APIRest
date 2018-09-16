const request = require('supertest');
const app = require('../app')
 
describe('Get one invention by id', () => {
  test('GET /inventions/:id', (done) => {
    request(app).get('/inventions/1').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(typeof response.body).toBe('object');
      expect(response.body.date).toBe(1974);
      done();
    });
  });
});