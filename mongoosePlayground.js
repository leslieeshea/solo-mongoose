const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dogs', {
  useNewUrlParser: true
});

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  breed: {
    type: String,
    required: true
  }
});

const Dog = mongoose.model('Dog', dogSchema);

Dog
  .create({
    name: 'buddy',
    age: 2,
    breed: 'golden retriever'
  })
  .then(createdDog => console.log(createdDog))
  .finally(() => mongoose.connection.close());

Dog
  .find()
  .then(foundDogs => console.log(foundDogs))
  .finally(() => {
    mongoose.connection.close();
  });

Dog
  .findbyId('5cb61a479e6b250bbdd9321b')
  .then(foundDog => console.log(foundDog._id))
  .finally(() => {
    mongoose.connection.close();
  });

Dog
  .findByIdAndUpdate('5cb61a479e6b250bbdd9321b'), { name: 'spot' }, { new: true }
  .then(updatedDog => console.log(updatedDog))
  .finally(() => {
    mongoose.connection.close();
  });

Dog
  .findByIdAndDelete('5cb61a479e6b250bbdd9321b')
  .then(result => console.log(result))
  .finally(() => {
    mongoose.connection.close();
  });
