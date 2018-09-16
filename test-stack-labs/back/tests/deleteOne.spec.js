const request = require('supertest');
const app = require('../app')
 
describe('Delete one invention by id', () => {
  test('DELETE /inventions/:id', (done) => {
    request(app).delete('/inventions/1').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(typeof response.body).toBe('object');
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(15);
      done();
    });
  });
});