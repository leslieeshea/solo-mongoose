const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      name,
      age,
      breed
    } = req.body;

    Dog
      .create({ name, age, breed })
      .then(createdDog => res.send(createdDog))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Dog
      .find()
      .then(dogs => res.send(dogs))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Dog
      .findByIdAndUpdate(id)
      .then(dog => res.send(dog))
      .catch(next);
  });
