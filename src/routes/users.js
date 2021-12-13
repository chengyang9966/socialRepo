const express = require('express');

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
  const { username, bio } = req.body;
  const user = await UserRepo.insert(username, bio);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;
  const user = await UserRepo.update(id, username, bio);
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
