const mongoose = require('mongoose');
const Tweet = require('../../lib/models/Tweet');

describe('Tweet model', () => {
  it('has a handle and body field', () => {
    const tweet = new Tweet({
      handle: 'leslie',
      body: 'my tweet body'
    });
    
    expect(tweet.toJSON()).toEqual({
      handle: 'leslie',
      body: 'my tweet body',
      _id: expect.any(String)
    });

    const errors = tweet.validateSync().errors;

    expect(errors.handle.message).toEqual('Path')
  });
});
