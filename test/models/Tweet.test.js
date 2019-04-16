const mongoose = require('mongoose');
const Tweet = require('../../lib/models/Tweet');

describe('Tweet model', () => {
  it('has a handle and a body field', () => {
    const tweet = new Tweet({
      handle: 'leslie',
      body: 'my first tweet'
    });

    expect(tweet.toJSON()).toEqual({
      handle: 'leslie',
      body: 'my first tweet',
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });
});
