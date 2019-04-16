const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tweets', {
  useNewUrlParser: true
});

const tweetSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

Tweet
  .create({
    handle: 'leslie',
    body: 'my first tweet'
  })
  .then(createdTweet => console.log(createdTweet))
  .finally(() => mongoose.connection.close());

Tweet
  .create({
    handle: 'leslie',
    body: 'my second tweet'
  })
  .then(createdTweet => {
    return Tweet.findbyId(createdTweet._id);
  })
  .then(foundTweet => console.log(foundTweet._id));

Tweet
  .create({
    handle: 'leslie',
    body: 'my third tweet'
  })
  .then(createdTweet => {
    return Tweet.findByIdAndUpdate(createdTweet._id, { body: 'hello there' });
  })
  .then(updatedTweet => console.log(updatedTweet));
