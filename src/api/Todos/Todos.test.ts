import request from 'supertest';

import app from '../../app';

describe('GET /api/v1/todos', () => {
  it('responds with an array of todos', async () => {
    // wrappe the app on a supertest
    request(app)
      .get('/api/v1/todos')
      // i wanna get application json
      // back
      .set('Accept', 'application/json')
      // and expect that the content-type is 
      // a json 
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response)=>{
        // sure that we're getting back 
        // an array as a body
        expect(response.body).toHaveProperty('length');
        // make sure that the array have
        // length one (1)
        expect(response.body.length).toBe(1);
        expect(response.body[0]).toHaveProperty('content');
        expect(response.body[0]).toHaveProperty('done');
        
      });
  });
});

