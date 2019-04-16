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
  .find()
  .then(foundTweets => console.log(foundTweets))
  .finally(() => {
    mongoose.connection.close();
  });

Tweet
  .findbyId('5cb61a479e6b250bbdd9321b')
  .then(foundTweet => console.log(foundTweet._id))
  .finally(() => {
    mongoose.connection.close();
  });

Tweet
  .findByIdAndUpdate('5cb61a479e6b250bbdd9321b'), { handle: 'les' }, { new: true }
  .then(updatedTweet => console.log(updatedTweet))
  .finally(() => {
    mongoose.connection.close();
  });

Tweet
  .findByIdAndDelete('5cb61a479e6b250bbdd9321b')
  .then(result => console.log(result))
  .finally(() => {
    mongoose.connection.close();
  });
