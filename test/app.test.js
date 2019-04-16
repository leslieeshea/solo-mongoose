const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
// const Dog = require('../lib/models/Dog');

describe('tweet routes', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost:27017/dogs', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a new dog', () => {
    return request(app)
      .post('/dogs')
      .send({
        name: 'buddy',
        age: 2,
        breed: 'mini goldendoodle'
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'buddy',
          age: 2,
          breed: 'mini goldendoodle',
          _id: expect.any(String),
          __v: 0
        });
      });
  });
});
