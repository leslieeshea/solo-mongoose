const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      handle,
      name,
      email
    } = req.body;

    User
      .create({ handle, name, email })
      .then(createdUser => res.send(createdUser))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    User
      .find()
      .lean()
      .select({
        __v: false
      })
      .then(users => res.send(users))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    User
      .findById(id)
      .lean()
      .select({
        __v: false
      })
      .then(foundUser => res.send(foundUser))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    const { id } = req.params;
    User
      .findByIdAndUpdate(id, { ...req.body }, { new: true })
      .lean()
      .select({
        __v: false
      })
      .then(updatedUser => res.send(updatedUser))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;
    User
      .findByIdAndDelete(id)
      .lean()
      .select({
        __v: false
      })
      .then(deletedUser => res.send(deletedUser))
      .catch(next);
  });
