const mongoose = require('mongoose');
const app = require('./lib/app');

const PORT = process.env.PORT || 7890;

mongoose.connect('mongodb://localhost:27017/dogs', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.listen(PORT, () => {
  /*eslint-disable-next-line*/
  console.log(`Started on port ${PORT}`);
});
