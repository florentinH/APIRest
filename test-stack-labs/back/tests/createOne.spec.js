const request = require('supertest');
const app = require('../app')
 
describe('Create one invention', () => {
  test('POST /inventions', (done) => {
    request(app).post('/inventions')
    .send({
      name: 'Ordinateur quantique',
      date: 2025
    })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(typeof response.body).toBe('object');
      expect(response.body.date).toBe(2025);
      expect(response.body.name).toBe('Ordinateur quantique');
      done();
    });
  });
});