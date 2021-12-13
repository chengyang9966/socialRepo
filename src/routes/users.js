const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const UserRepo = require('../repos/user-repo');

router.get('/api/users', async (req, res) => {
  const user = await UserRepo.find();
  res.send(user);
});

router.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await UserRepo.findById(id);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.post('/api/users', async (req, res) => {
  const { username, bio, email, type, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  let newPassword = await bcrypt.hash(password, salt);

  const user = await UserRepo.insert(username, bio, email, newPassword, type);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, bio, email, password, type } = req.body;
  const salt = await bcrypt.genSalt(10);
  let newPassword = await bcrypt.hash(password, salt);

  const user = await UserRepo.update(
    id,
    username,
    bio,
    email,
    newPassword,
    type
  );
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await UserRepo.delete(id);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
