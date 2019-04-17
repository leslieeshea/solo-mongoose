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
      .select({
        __v: false
      })
      .then(dogs => res.send(dogs))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Dog
      .findByIdAndUpdate(id)
      .select({
        __v: false
      })
      .then(dog => res.send(dog))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    const { id } = req.params;
    Dog
      .findByIdAndUpdate(id, { ...req.body }, { new: true })
      .select({
        __v: false
      })
      .then(updatedDog => res.send(updatedDog))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Dog
      .findByIdAndDelete(id)
      .select({
        __v: false
      })
      .then(result => res.send(result))
      .catch(next);
  });
