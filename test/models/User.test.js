const mongoose = require('mongoose');
const User = require('../../lib/models/User');

describe('User model', () => {
  it('has a handle, name and email', () => {
    const user = new User({
      handle: '@leslie',
      name: 'leslie',
      email: 'leslie@gmail.com'
    });

    expect(user.toJSON()).toEqual({
      handle: '@leslie',
      name: 'leslie',
      email: 'leslie@gmail.com',
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });
});
