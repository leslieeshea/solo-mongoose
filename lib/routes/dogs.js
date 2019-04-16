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
  });
